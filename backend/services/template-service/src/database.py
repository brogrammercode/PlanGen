from pymongo.mongo_client import MongoClient

from src.env import env

client = MongoClient(env.DATABASE_URL)
db = client[env.DATABASE_NAME]
collection = db[env.DATABASE_COLLECTION]
plans_collection = db[env.PLAN_COLLECTION]

# Test connection on import
try:
    client.admin.command('ping')
    print("Successfully connected to MongoDB!")
except Exception as e:
    print(f"MongoDB connection error: {e}")
    raise
