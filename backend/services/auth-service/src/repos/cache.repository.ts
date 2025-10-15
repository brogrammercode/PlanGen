import { redis } from "@/infrastructure";

export class CacheRepository {
  constructor() {}

  private readonly prefix = "auth:";

  private getKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  async set(key: string, value: any, ttl?: number): Promise<void> {
    const serialized = JSON.stringify(value);
    const fullKey = this.getKey(key);
    if (ttl) {
      await redis.setex(fullKey, ttl, serialized);
    } else {
      await redis.set(fullKey, serialized);
    }
  }

  async get(key: string): Promise<any | null> {
    const fullKey = this.getKey(key);
    const data = await redis.get(fullKey);
    return JSON.stringify(data);
  }

  async delete(key: string): Promise<void> {
    const fullKey = this.getKey(key);
    await redis.del(fullKey);
  }

  async exists(key: string): Promise<boolean> {
    const fullKey = this.getKey(key);
    const result = await redis.exists(fullKey);
    return result === 1;
  }
}
