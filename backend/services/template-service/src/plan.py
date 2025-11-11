import datetime
from src.template import Task

from ast import List
from typing import Optional
from pydantic import BaseModel, Field


class Plan(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    uid: str
    templateID: str
    tasks: List[Task] = []
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    model_config = {
        "populate_by_name": True,
        "from_attributes": True,
        "json_encoders": {datetime: lambda v: v.isoformat()},
    }

    @staticmethod
    def from_mongo(doc: dict) -> Optional["Plan"]:
        if not doc:
            return None
        doc["id"] = str(doc["_id"])
        doc.pop("_id", None)
        return Plan(**doc)

    def to_mongo(self) -> dict:
        data = self.dict(by_alias=True, exclude={"id"})
        data["updatedAt"] = datetime.utcnow()
        if "createdAt" not in data or not data["createdAt"]:
            data["createdAt"] = datetime.utcnow()
        return data
