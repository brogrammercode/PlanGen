from datetime import datetime
from typing import Any, Optional

from pydantic import BaseModel


class ServerResponse(BaseModel):
    success: bool = True
    status_code: int = 200
    message: Optional[str] = None
    data: Optional[Any] = None
    timestamp: str = datetime.utcnow().isoformat()

    @classmethod
    def ok(cls, status_code=status_code, data: Any = None, message: str = "Success"):
        return cls(status_code=status_code, success=True, message=message, data=data,
                   timestamp=datetime.utcnow().isoformat())

    @classmethod
    def fail(cls, status_code=status_code, message: str = "Error", data: Any = None):
        return cls(status_code=status_code | 400, success=False, message=message, data=data,
                   timestamp=datetime.utcnow().isoformat())
