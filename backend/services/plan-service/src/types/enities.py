from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, Field


class Task(BaseModel):
    id: Optional[str] = None
    index: int
    points: float
    task: str
    notes: str
    dateAssigned: datetime
    createdAt: datetime
    updatedAt: datetime


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
