import winston from "winston";
import { env } from "./env";

export const logger = winston.createLogger({
  level: env.LOG_LEVEL,
  defaultMeta: { service: env.SERVICE_NAME },
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp, service }) => {
      return `[${timestamp}]: [${level}] -> [${service}] -> [${message}]`;
    })
  ),
  transports: [new winston.transports.Console()],
});
