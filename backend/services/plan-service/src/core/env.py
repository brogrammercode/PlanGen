import os

from dotenv import load_dotenv

load_dotenv()


class Env:
    """Environment configuration with validation"""
    DATABASE_URL: str
    DATABASE_NAME: str
    DATABASE_COLLECTION: str

    def __init__(self):
        self.DATABASE_URL = os.getenv("DATABASE_URL", "")
        self.DATABASE_NAME = os.getenv("DATABASE_NAME", "")
        self.DATABASE_COLLECTION = os.getenv("DATABASE_COLLECTION", "")

        if not self.DATABASE_URL:
            raise ValueError("Missing required environment variable: DATABASE_URL")
        if not self.DATABASE_NAME:
            raise ValueError("Missing required environment variable: DATABASE_NAME")
        if not self.DATABASE_COLLECTION:
            raise ValueError("Missing required environment variable: DATABASE_COLLECTION")

env = Env()
