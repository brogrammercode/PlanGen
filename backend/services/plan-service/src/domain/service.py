from typing import List

from src.infra.database import collection
from src.types.enities import Plan


class PlanService:

    @staticmethod
    def add_plan(plan: Plan) -> Plan:
        result = collection.insert_one(plan.to_mongo())
        inserted = collection.find_one({"_id": result.inserted_id})
        return Plan.from_mongo(inserted)

    @staticmethod
    def get_plan(plan_id: str) -> Plan:
        result = collection.find_one({"_id": plan_id})
        return Plan.from_mongo(result) 

    @staticmethod
    def get_all_plans() -> List[Plan]:
        result = collection.find()
        return [Plan.from_mongo(plan) for plan in result]

    @staticmethod
    def update_plan(plan: Plan) -> Plan:
        result = collection.update_one({"_id": plan.id}, {"$set": plan.to_mongo()})
        updated = collection.find_one({"_id": plan.id})
        return Plan.from_mongo(updated)

    @staticmethod
    def delete_plan(plan_id: str):
        result = collection.delete_one({"_id": plan_id})
