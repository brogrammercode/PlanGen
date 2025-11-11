from fastapi import FastAPI
from src.exception import register_exception_handlers

from src.controller import router as template_router

app = FastAPI(title="Template Service")
app.include_router(template_router)

register_exception_handlers(app)