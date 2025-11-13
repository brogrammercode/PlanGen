import pack from "../../package.json";

interface Env {
  NODE_ENV: string;
  PORT: number;
  SERVICE_NAME: string;
  //
  AUTH: string;
  TEMPLATE: string;
  PLAN: string;
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
  PORT: Number(process.env.PORT) || 3000,
  SERVICE_NAME: pack.name || "",
  //
  AUTH: process.env.AUTH || "http://localhost:3001",
  TEMPLATE: process.env.TEMPLATE || "http://localhost:3002",
  PLAN: process.env.PLAN || "http://localhost:3003",
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
