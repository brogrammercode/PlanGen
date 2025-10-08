from fastapi import FastAPI

from src.api import routes
from src.middlewares.exception import global_exception_handler

app = FastAPI(title="Plan Service")

app.include_router(routes.root_router)
app.include_router(routes.router)

app.add_exception_handler(Exception, global_exception_handler)
