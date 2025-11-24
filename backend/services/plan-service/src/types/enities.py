from datetime import datetime
from typing import Any, Dict, List, Optional

from bson import ObjectId
from pydantic import BaseModel, Field

def maybe_objectid(value: Optional[str]) -> Optional[ObjectId]:
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
    status: str = "Not Started"
    note: Optional[str] = None
    dateAssigned: Optional[datetime] = None
    createdAt: Optional[datetime] = None
    updatedAt: Optional[datetime] = None

    class Config:
        populate_by_name = True
        validate_by_name = True

    @staticmethod
    def from_mongo(doc: Dict[str, Any]) -> "Task":
        if not doc:
            raise ValueError("Empty task")
        data = dict(doc)
        data["id"] = str(data["_id"]) if data.get("_id") else None
        data.pop("_id", None)
        return Task(**data)
    
    def to_mongo(self) -> Dict[str, Any]:
        provided = self.id
        oid = maybe_objectid(provided) or ObjectId()

        return {
            "_id": oid,
            "index": self.index,
            "points": self.points,
            "task": self.task,
            "status": self.status,
            "note": self.note,
            "dateAssigned": self.dateAssigned or datetime.utcnow(),
            "createdAt": self.createdAt or datetime.utcnow(),
            "updatedAt": self.updatedAt or datetime.utcnow(),
        }


class Plan(BaseModel):
    id: Optional[str] = Field(default=None, alias="id")
    uid: Optional[str] = None
    templateID: Optional[str] = None
    tasks: List[Task] = Field(default_factory=list)
    createdAt: Optional[datetime] = None
    updatedAt: Optional[datetime] = None

    class Config:
        populate_by_name = True
        validate_by_name = True

    @staticmethod
    def from_mongo(doc: Dict[str, Any]) -> Optional["Plan"]:
        if not doc:
            return None

        data = dict(doc)
        data["id"] = str(data["_id"]) if data.get("_id") else None
        data.pop("_id", None)

        if data.get("uid"):
            data["uid"] = str(data["uid"])

        if data.get("templateID"):
            data["templateID"] = str(data["templateID"])

        data["tasks"] = [Task.from_mongo(t) for t in data.get("tasks", [])]

        return Plan(**data)

    def to_mongo(self) -> Dict[str, Any]:
        tpl_oid = maybe_objectid(self.id) or ObjectId()
        mongo_doc = {
            "_id": tpl_oid,
            "tasks": [t.to_mongo() for t in self.tasks],
            "createdAt": self.createdAt or datetime.utcnow(),
            "updatedAt": datetime.utcnow(),
        }
        if self.uid:
            cat_ouid = maybe_objectid(self.uid)
            mongo_doc["uid"] = cat_ouid or self.uid

        if self.templateID:
            cat_otid = maybe_objectid(self.templateID)
            mongo_doc["templateID"] = cat_otid or self.templateID
        return mongo_doc
