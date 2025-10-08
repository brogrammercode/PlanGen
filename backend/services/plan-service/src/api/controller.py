from src.domain.service import PlanService
from src.types.enities import Plan
from src.types.response import ServerResponse


class PlanController:

    def __init__(self):
        self.service = PlanService()

    def health(self):
        return ServerResponse(message="All working !!")

    def plan(self):
        return ServerResponse(message="Plan")

    def add_plan(self, plan: Plan) -> ServerResponse:
        added_plan = self.service.add_plan(plan)
        return ServerResponse(status_code=201, message="Plan added", data={
            "plan": added_plan.to_dict()
        })
