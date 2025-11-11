import os

class Env:
    DATABASE_URL: str
    DATABASE_NAME: str
    DATABASE_COLLECTION: str

    def __init__(self):
        self.DATABASE_URL = os.getenv("DATABASE_URL", "")
        self.DATABASE_NAME = os.getenv("DATABASE_NAME", "")
        self.DATABASE_COLLECTION = os.getenv("DATABASE_COLLECTION", "")

env = Env()