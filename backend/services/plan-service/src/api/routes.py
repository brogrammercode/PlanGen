from fastapi import APIRouter

from src.api.controller import PlanController
from src.types.enities import Plan

router = APIRouter(prefix="/api/v1/plan", tags=["Plan"])
root_router = APIRouter(prefix="/api", tags=["Root"])
controller = PlanController()


@root_router.get("/health")
def health():
    return controller.health()


@root_router.get("/")
def health():
    return controller.plan()


@router.post("/")
def add_plan(plan: Plan):
    return controller.add_plan(plan)
