import { env, logger } from "@/core";
import Redis from "ioredis";

const redis = new Redis({
  host: env.REDIS_HOST,
  port: env.REDIS_PORT,
  password: env.REDIS_PASSWORD,
  db: env.REDIS_DB,
  retryStrategy(times) {
    return Math.min(times * 200, 2000);
  },
});

redis.on("connect", () => logger.info("REDIS CONNECTED"));
redis.on("error", (err) => logger.error("REDIS ERROR", err));

export { redis };
