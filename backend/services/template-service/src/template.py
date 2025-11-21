from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, Field

class Task(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    index: int
    points: int
    task: str
    note: str
    dateAssigned: datetime
    createdAt: Optional[datetime] = None
    updatedAt: Optional[datetime] = None

class Template(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    name: str
    description: str
    categoryID: str
    tasks: List[Task] = []
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime =  Field(default_factory=datetime.utcnow)
    
    model_config = {
        "populate_by_name": True,
        "from_attributes": True,
        "json_encoders": {datetime: lambda v: v.isoformat()},
    }

    def from_mongo(doc: dict) -> Optional["Template"]:
        if not doc:
            return None
        doc["id"] = str(doc["_id"])
        doc.pop("_id", None)
        return Template(**doc)
    
    def to_mongo(self)-> dict:
        data = self.dict(by_alias=True, exclude={"id"})
        data["updatedAt"] = datetime.utcnow()
        if "createdAt" not in data or not data["createdAt"]:
            data["createdAt"] = datetime.utcnow()
        return data