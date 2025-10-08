from datetime import datetime
from typing import List

from pydantic import BaseModel, Field


class Task(BaseModel):
    id: str
    index: int
    points: float
    task: str
    notes: str
    dateAssigned: datetime
    createdAt: datetime
    updatedAt: datetime


class Plan(BaseModel):
    id: str = Field(None, alias="_id")
    uid: str
    templateID: str
    tasks: List[Task] = []
    createdAt: datetime
    updatedAt: datetime

    class Config:
        allow_population_by_field_name = True
        orm_mode = True
        json_encoders = {datetime: lambda v: v.isoformat()}

    @staticmethod
    def from_mongo(doc: dict) -> "Plan":
        if not doc:
            return None
        doc["id"] = str(doc["_id"])
        doc.pop("_id", None)
        return Plan(**doc)

    def to_mongo(self) -> dict:
        data = self.dict(by_alias=True)
        data.pop("id", None)
        data["updatedAt"] = datetime.utcnow()
        return data
