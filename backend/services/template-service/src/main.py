from fastapi import FastAPI

app = FastAPI(title="Template Service")

@app.get("/health")
def health():
    return {"status": "ok", "service": "template-service"}

@app.get("/")
def root():
    return {"message": "Template Service"}

