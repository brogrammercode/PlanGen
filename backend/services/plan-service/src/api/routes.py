from fastapi import APIRouter

from src.api.controller import PlanController

router = APIRouter(prefix="/api/v1/plan", tags=["Plan"])
root_router = APIRouter(prefix="/api", tags=["Root"])
controller = PlanController()


@root_router.get("/health")
def health():
    return controller.health()


@root_router.get("/")
def health():
    return controller.plan()
