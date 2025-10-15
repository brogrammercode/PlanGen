import { logger } from "@/core";
import Redis from "ioredis";

const redis = new Redis();

redis.on("connect", () => logger.info("REDIS CONNECTED"));
redis.on("error", (err) => logger.error("REDIS ERROR", err));

export { redis };
