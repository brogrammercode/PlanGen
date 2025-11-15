import pack from "../../package.json";

interface Env {
  NODE_ENV: string;
  PORT: number;
  HOST_NAME: string;
  SERVICE_NAME: string;
  //
  DATABASE_URL: string;
  //
  REDIS_HOST: string;
  REDIS_PORT: number;
  REDIS_PASSWORD: string;
  REDIS_DB: number;
  //
  ALLOWED_ORIGINS: string;
  COOKIE_MAX_AGE: number;
  //
  ACCESS_TOKEN_SECRET: string;
  ACCESS_TOKEN_EXP: string;
  REFRESH_TOKEN_SECRET: string;
  REFRESH_TOKEN_EXP: string;
  REFRESH_TOKEN_EXP_IN_NUM: number;
  //
  RATE_LIMIT_WINDOW_MS: number;
  RATE_LIMIT_MAX_REQUESTS: number;
  //
  LOG_LEVEL: string;
}

const getRequiredEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

export const env: Env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 3001,
  HOST_NAME: process.env.HOST_NAME || "0.0.0.0",
  SERVICE_NAME: pack.name || "",
  //
  DATABASE_URL: getRequiredEnv("DATABASE_URL"),
  //
  REDIS_HOST: (process.env.REDIS_HOST as string) || "localhost",
  REDIS_PORT: Number(process.env.REDIS_PORT) || 0,
  REDIS_PASSWORD: (process.env.REDIS_PASSWORD as string) || "",
  REDIS_DB: Number(process.env.REDIS_DB) || 0,
  //
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || "http://localhost:5173",
  COOKIE_MAX_AGE: Number(process.env.COOKIE_MAX_AGE) || 604800000,
  //
  ACCESS_TOKEN_SECRET: getRequiredEnv("ACCESS_TOKEN_SECRET"),
  ACCESS_TOKEN_EXP: process.env.ACCESS_TOKEN_EXP || "15m",
  REFRESH_TOKEN_SECRET: getRequiredEnv("REFRESH_TOKEN_SECRET"),
  REFRESH_TOKEN_EXP: process.env.REFRESH_TOKEN_EXP || "7d",
  REFRESH_TOKEN_EXP_IN_NUM:
    Number(process.env.REFRESH_TOKEN_EXP_IN_NUM) || 604800,
  //
  RATE_LIMIT_WINDOW_MS: Number(process.env.RATE_LIMIT_WINDOW_MS) || 900000,
  RATE_LIMIT_MAX_REQUESTS: Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
  //
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
};
