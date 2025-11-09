from fastapi import APIRouter

from src.api.controller import PlanController
from src.types.enities import Plan

router = APIRouter(tags=["Plan"])
controller = PlanController()


@router.get("/health")
def health():
    return controller.health()


@router.get("/")
def get_plan():
    return controller.get_plans()


@router.post("/")
def add_plan(plan: Plan):
    return controller.add_plan(plan)
