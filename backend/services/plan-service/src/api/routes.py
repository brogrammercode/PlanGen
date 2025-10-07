from datetime import datetime
from fastapi import APIRouter

router = APIRouter()

@router.get("/health", tags=["Health"])
def health():
    return {
        "status": "ok",
        "timestamp": datetime.utcnow().isoformat() + "Z"
    }
 