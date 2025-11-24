from typing import List

from bson import ObjectId

from src.infra.database import collection
from src.types.enities import Plan


class PlanService:

    def __init__(self):
        pass

    def get_all_plans(self) -> List[Plan]:
        result = collection.find()
        return [Plan.from_mongo(plan) for plan in result]

    def add_plan(self, plan: Plan) -> Plan:
        result = collection.insert_one(plan.to_mongo())
        inserted = collection.find_one({"_id": result.inserted_id})
        return Plan.from_mongo(inserted)

    def get_plan(self, plan_id: str) -> Plan:
        oid = ObjectId(plan_id)
        result = collection.find_one({"_id": oid})
        return Plan.from_mongo(result)

    def get_plan_by_uid(self, uid: str) -> List[Plan]:
        result = collection.find({"uid": uid})
        plans = [Plan.from_mongo(doc) for doc in result]
        return plans

    def update_plan(self, plan: Plan) -> Plan:
        result = collection.update_one({"_id": plan.id}, {"$set": plan.to_mongo()})
        updated = collection.find_one({"_id": plan.id})
        return Plan.from_mongo(updated)

    def delete_plan(self, plan_id: str):
        result = collection.delete_one({"_id": plan_id})
