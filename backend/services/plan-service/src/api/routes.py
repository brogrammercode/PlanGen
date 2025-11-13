from fastapi import APIRouter

from src.api.controller import PlanController
from src.types.enities import Plan

router = APIRouter(tags=["Plan"])
controller = PlanController()


@router.get("/health")
def health():
    return controller.health()

@router.get("/")
def get_plans():
    return controller.get_plans()

@router.get("/{plan_id}")
def get_plan(plan_id: str):
    return controller.get_plan(plan_id=plan_id)

@router.post("/")
def add_plan(plan: Plan):
    return controller.add_plan(plan=plan)

@router.put("/{plan_id}")
def update_plan(plan_id: str, plan: Plan):
    return controller.update_plan(plan_id, plan=plan)

@router.delete("/{plan_id}")
def update_plan(plan_id: str):
    return controller.delete_plan(plan_id=plan_id)
