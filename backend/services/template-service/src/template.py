from datetime import datetime
from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field
from bson import ObjectId


def maybe_objectid(value: Optional[str]) -> Optional[ObjectId]:
    """Convert a string to ObjectId if valid.
       If empty string/None/null → return None.
       If invalid ObjectId string → generate new one.
    """
    if not value or value == "null":
        return None
    try:
        return ObjectId(value)
    except Exception:
        return ObjectId()


class Task(BaseModel):
    id: Optional[str] = Field(default=None, alias="id")
    index: int
    points: int
    task: str
    note: Optional[str] = None
    dateAssigned: Optional[datetime] = None
    createdAt: Optional[datetime] = None
    updatedAt: Optional[datetime] = None

    class Config:
        populate_by_name = True
        validate_by_name = True

    @staticmethod
    def from_mongo(doc: Dict[str, Any]) -> "Task":
        """Convert MongoDB task doc → Task model with id instead of _id."""
        if not doc:
            raise ValueError("Empty task document")

        data = dict(doc)
        data["id"] = str(data["_id"]) if data.get("_id") else None
        data.pop("_id", None)

        return Task(**data)

    def to_mongo(self) -> Dict[str, Any]:
        """Convert Task model → MongoDB doc. Generates ObjectId when missing."""
        provided = self.id
        oid = maybe_objectid(provided) or ObjectId()

        return {
            "_id": oid,
            "index": self.index,
            "points": self.points,
            "task": self.task,
            "note": self.note,
            "dateAssigned": self.dateAssigned or datetime.utcnow(),
            "createdAt": self.createdAt or datetime.utcnow(),
            "updatedAt": self.updatedAt or datetime.utcnow(),
        }


class Template(BaseModel):
    id: Optional[str] = Field(default=None, alias="id")
    name: str
    description: str
    categoryID: Optional[str] = None
    tasks: List[Task] = Field(default_factory=list)
    createdAt: Optional[datetime] = None
    updatedAt: Optional[datetime] = None

    class Config:
        populate_by_name = True
        validate_by_name = True

    @staticmethod
    def from_mongo(doc: Dict[str, Any]) -> Optional["Template"]:
        """Convert MongoDB template doc → Template model with id + clean tasks."""
        if not doc:
            return None

        data = dict(doc)

        # template id
        data["id"] = str(data["_id"]) if data.get("_id") else None
        data.pop("_id", None)

        # categoryID cast
        if data.get("categoryID"):
            data["categoryID"] = str(data["categoryID"])

        # hydrate tasks
        data["tasks"] = [Task.from_mongo(t) for t in data.get("tasks", [])]

        return Template(**data)

    def to_mongo(self) -> Dict[str, Any]:
        """Convert Template model → MongoDB document with proper ObjectIds."""
        tpl_oid = maybe_objectid(self.id) or ObjectId()

        mongo_doc = {
            "_id": tpl_oid,
            "name": self.name,
            "description": self.description,
            "createdAt": self.createdAt or datetime.utcnow(),
            "updatedAt": datetime.utcnow(),
            "tasks": [t.to_mongo() for t in self.tasks],
        }

        # category foreign key
        if self.categoryID:
            cat_oid = maybe_objectid(self.categoryID)
            mongo_doc["categoryID"] = cat_oid or self.categoryID

        return mongo_doc
