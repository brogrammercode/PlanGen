from fastapi import HTTPException
from src.domain.service import PlanService
from src.types.enities import Plan
from src.types.response import ServerResponse


class PlanController:

    def __init__(self):
        self.service = PlanService()

    def health(self):
        return ServerResponse.ok(message="All working from Plan Service side!!")

    def get_plans(self):
        plans = self.service.get_all_plans()
        return ServerResponse.ok(message="Got all the plans", data={
            "plans": plans
        })

    async def get_plan(self, plan_id: str):
        plan = await self.service.get_plan(plan_id=plan_id)
        if not plan:
            raise HTTPException(404, "Plan not found")

        return ServerResponse.ok(message=f"Got plan {plan_id}", data={"plan": plan.to_mongo()})

    async def get_plan_by_uid(self, uid: str):
        plans = self.service.get_plan_by_uid(uid)
        if not plans:
            raise HTTPException(404, "Plans not found")
        return ServerResponse.ok(
            message=f"Got all plans for uid: {uid}",
            data={"plans": plans}
        )


    def add_plan(self, plan: Plan) -> ServerResponse:
        added_plan = self.service.add_plan(plan)
        return ServerResponse.ok(status_code=201, message="Plan added", data={
            "plan": added_plan.to_mongo()
        })

    def update_plan(self, plan: Plan) -> ServerResponse:
        updated_plan = self.service.update_plan(plan=plan)
        return ServerResponse.ok(status_code=202, message="Plan updated", data={
            "plan": updated_plan.to_mongo()
        })

    def delete_plan(self, plan_id: str) -> ServerResponse:
        deleted_plan = self.service.delete_plan_plan(plan_id=plan_id)
        return ServerResponse.ok(message=f"Plan deleted of id {plan_id}")
