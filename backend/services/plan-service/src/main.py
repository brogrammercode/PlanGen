from fastapi import FastAPI
from src.api import routes

app = FastAPI(title="Demo FastAPI App")

# Include router
app.include_router(routes.router, prefix="/api/v1/plan")

@app.get("/")
def root():
    return {"message": "Demo FastAPI app is running"}
