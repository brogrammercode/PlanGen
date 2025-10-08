from fastapi import Request
from fastapi.exceptions import RequestValidationError, HTTPException
from fastapi.responses import JSONResponse

from src.types.response import ServerResponse


async def global_exception_handler(request: Request, exc: Exception):
    if isinstance(exc, HTTPException):
        return JSONResponse(
            status_code=exc.status_code,
            content=ServerResponse.fail(message=exc.detail).dict()
        )
    elif isinstance(exc, RequestValidationError):
        return JSONResponse(
            status_code=422,
            content=ServerResponse.fail(status_code=422, message="Validation Error", data=exc.errors()).dict()
        )
    else:
        return JSONResponse(
            status_code=500,
            content=ServerResponse.fail(status_code=500, message=str(exc)).dict()
        )
