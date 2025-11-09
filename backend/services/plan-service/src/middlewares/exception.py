import os
from fastapi import Request
from fastapi.encoders import jsonable_encoder
from fastapi.exceptions import RequestValidationError, HTTPException
from fastapi.responses import JSONResponse

from src.types.response import ServerResponse

async def global_exception_handler(request: Request, exc: Exception):
    is_development = os.getenv("NODE_ENV", "development") == "development"
    
    if isinstance(exc, HTTPException):
        return JSONResponse(
            status_code=exc.status_code,
            content=jsonable_encoder(ServerResponse.fail(message=exc.detail).dict())
        )
    elif isinstance(exc, RequestValidationError):
        return JSONResponse(
            status_code=422,
            content=jsonable_encoder(
                ServerResponse.fail(status_code=422, message="Validation Error", data=exc.errors()).dict())
        )
    else:
        # Hide error details in production
        error_message = str(exc) if is_development else "An error occurred. Please try again later."
        return JSONResponse(
            status_code=500,
            content=jsonable_encoder(ServerResponse.fail(status_code=500, message=error_message).dict())
        )
