import redis from "@/infrastructure/cache/redis.client";
import { RegisteredUserDTO } from "@/types";
import { User } from "@prisma/client";

export interface ICacheRepository {
  cacheUser(user: User): Promise<void>;
  cacheToken(data: RegisteredUserDTO): Promise<void>;
  uncacheUser(userID: string): Promise<void>;
  uncacheToken(userID: string): Promise<void>;
  getcachedUser(userID: string): Promise<User>;
  getcachedToken(userID: string): Promise<string>;
  getallUsers(): Promise<User[]>;
}

export class CacheRepositoryImpl implements ICacheRepository {
  async getallUsers(): Promise<User[]> {
    const keys = await redis.keys("users:*");
    const filteredkeys = keys.filter((k) => !k.endsWith(":token"));
    if (!keys.length) return [];
    const raw = await redis.mget(filteredkeys);
    const users: User[] = raw
      .filter((u) => u != null)
      .map((u) => JSON.parse(u as string) as User);
    return users;
  }

  async getcachedUser(userID: string): Promise<User> {
    const userKey = `users:${userID}`;
    const cacheduser = await redis.get(userKey);
    return JSON.parse(cacheduser || "") as User;
  }

  async getcachedToken(userID: string): Promise<string> {
    const tokenKey = `users:${userID}:token`;
    const cachedtoken = await redis.get(tokenKey);
    return cachedtoken as string;
  }

  async cacheUser(user: User): Promise<void> {
    const key = `users:${user.id}`;
    await redis.set(key, JSON.stringify(user), "EX", "900");
  }

  async cacheToken(data: RegisteredUserDTO): Promise<void> {
    const key = `users:${data.user.id}:token`;
    await redis.set(key, data.token, "EX", "600");
  }

  async uncacheUser(userID: string): Promise<void> {
    const key = `users:${userID}`;
    await redis.del(key);
  }

  async uncacheToken(userID: string): Promise<void> {
    const key = `users:${userID}:token`;
    await redis.del(key);
  }
}
