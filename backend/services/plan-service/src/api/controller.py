from src.domain.service import PlanService


class PlanController:

    def __init__(self):
        self.service = PlanService()

    def health(self):
        return {
            "status": "ok",
        }

    def plan(self):
        return {
            "service": "Plan",
        }

    # def add_plan(plan: Plan) -> Plan:
