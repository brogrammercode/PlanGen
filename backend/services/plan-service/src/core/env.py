import os

from dotenv import load_dotenv
from pydantic.v1 import BaseSettings

load_dotenv()


class Env(BaseSettings):
    DATABASE_URL: str = os.getenv("DATABASE_URL")
    DATABASE_NAME: str = os.getenv("DATABASE_NAME")
    DATABASE_COLLECTION: str = os.getenv("DATABASE_COLLECTION")


env = Env()
