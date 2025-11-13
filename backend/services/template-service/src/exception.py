import logging
import traceback
from fastapi import Request, FastAPI
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
from pymongo.errors import PyMongoError

logger = logging.getLogger("uvicorn.error")

def _error_response(status_code: int, message: str, details: str = None):
    return JSONResponse(
        status_code=status_code,
        content={
            "success": False,
            "error": {"message": message, "details": details},
        },
    )


async def _http_exception_handler(request: Request, exc: StarletteHTTPException):
    logger.warning(f"HTTPException: {exc.detail} at {request.url}")
    return _error_response(exc.status_code, exc.detail)


async def _validation_exception_handler(request: Request, exc: RequestValidationError):
    logger.error(f"ValidationError at {request.url}: {exc.errors()}")
    return _error_response(422, "Validation Error", str(exc.errors()))


async def _pymongo_exception_handler(request: Request, exc: PyMongoError):
    logger.error(f"MongoDB Error at {request.url}: {str(exc)}")
    return _error_response(500, "Database Error", str(exc))


async def _general_exception_handler(request: Request, exc: Exception):
    logger.critical(f"Unhandled Exception at {request.url}:\n{traceback.format_exc()}")
    return _error_response(500, "Internal Server Error", str(exc))


def register_exception_handlers(app: FastAPI):
    """Registers all global exception handlers on the given FastAPI app."""
    app.add_exception_handler(StarletteHTTPException, _http_exception_handler)
    app.add_exception_handler(RequestValidationError, _validation_exception_handler)
    app.add_exception_handler(PyMongoError, _pymongo_exception_handler)
    app.add_exception_handler(Exception, _general_exception_handler)
