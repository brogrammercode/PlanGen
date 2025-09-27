import logger from "@/core/logger";
import Redis from "ioredis";

const redis = new Redis();

redis.on("connect", () => logger.info("REDIS CONNECTED"));
redis.on("error", (err) => logger.error("REDIS ERROR", err));

export default redis;
