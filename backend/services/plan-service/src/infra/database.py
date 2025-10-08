from pymongo.mongo_client import MongoClient

from src.core.env import Env

env = Env()
client = MongoClient(env.DATABASE_URL)
db = client[env.DATABASE_NAME]
collection = db[env.DATABASE_COLLECTION]
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
