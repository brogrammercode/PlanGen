from datetime import datetime, timedelta
from typing import List, Optional
from fastapi import HTTPException
from bson import ObjectId

from src.database import collection, plans_collection
from src.plan import Plan
from src.template import Task, Template


class TemplateService:
    def __init__(self):
        pass

    def get_all_templates(self) -> List[Template]:
        templates_cursor = collection.find()
        templates = [Template.from_mongo(doc) for doc in templates_cursor]
        return templates

    def add_template(self, template: Template) -> Template:
        result = collection.insert_one(template.to_mongo())
        inserted = collection.find_one({"_id": result.inserted_id})
        if not inserted:
            raise HTTPException(status_code=500, detail="Failed to insert template.")
        return Template.from_mongo(inserted)

    def update_template(self, template_id: str, updated_data: dict) -> Template:
        if not ObjectId.is_valid(template_id):
            raise HTTPException(status_code=400, detail="Invalid template ID")

        result = collection.update_one(
            {"_id": ObjectId(template_id)},
            {"$set": updated_data}
        )
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Template not found")

        updated = collection.find_one({"_id": ObjectId(template_id)})
        return Template.from_mongo(updated)

    def delete_template(self, template_id: str) -> bool:
        if not ObjectId.is_valid(template_id):
            raise HTTPException(status_code=400, detail="Invalid template ID")

        result = collection.delete_one({"_id": ObjectId(template_id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Template not found")

        return True

    def get_templates_by_id(self, template_ids: List[str]) -> List[Template]:
        object_ids = [ObjectId(tid) for tid in template_ids if ObjectId.is_valid(tid)]
        templates_cursor = collection.find({"_id": {"$in": object_ids}})
        templates = [Template.from_mongo(doc) for doc in templates_cursor]
        return templates

    def search_template(self, query: str) -> List[Template]:
        search_filter = {
            "$or": [
                {"name": {"$regex": query, "$options": "i"}},
                {"description": {"$regex": query, "$options": "i"}},
            ]
        }
        templates_cursor = collection.find(search_filter)
        templates = [Template.from_mongo(doc) for doc in templates_cursor]
        return templates

    def transform_template_into_plan(self, template_id: str, uid: str) -> Plan:
        if not ObjectId.is_valid(template_id):
            raise HTTPException(status_code=400, detail="Invalid template ID")

        template_data = collection.find_one({"_id": ObjectId(template_id)})
        if not template_data:
            raise HTTPException(status_code=404, detail="Template not found")

        template = Template.from_mongo(template_data)

        start_date = datetime.utcnow() + timedelta(days=1)
        updated_tasks = []

        for i, task in enumerate(template.tasks):
            assigned_date = start_date + timedelta(days=i)

            fields_to_override = {"dateAssigned", "createdAt", "updatedAt"}

            clean_task = task.dict(exclude=fields_to_override)

            updated_task = Task(
                **clean_task,
                dateAssigned=assigned_date,
                createdAt=datetime.utcnow(),
                updatedAt=datetime.utcnow()
            )

            updated_tasks.append(updated_task)

        plan_data = Plan(
            uid=uid,
            templateID=str(template_id),
            tasks=updated_tasks,
            createdAt=datetime.utcnow(),
            updatedAt=datetime.utcnow(),
        )

        result = plans_collection.insert_one(plan_data.to_mongo())
        inserted = plans_collection.find_one({"_id": result.inserted_id})

        if not inserted:
            raise HTTPException(status_code=500, detail="Failed to create plan")

        return Plan.from_mongo(inserted)
