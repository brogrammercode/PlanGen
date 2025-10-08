from fastapi import FastAPI

from src.api import routes

app = FastAPI(title="Plan Service")

app.include_router(routes.root_router)
app.include_router(routes.router)
