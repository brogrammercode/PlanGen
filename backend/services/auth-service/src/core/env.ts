import pack from "../../package.json";

interface Env {
  SERVICE_NAME: string;
  NODE_ENV: string;
  PORT: number;
  DATABASE_URL: string;
  LOG_LEVEL: string;
  ALLOWED_ORIGINS: string;
  JWT_SECRET: string;
}

export const env: Env = {
  SERVICE_NAME: pack.name || "",
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 3001,
  DATABASE_URL: process.env.DATABASE_URL as string,
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || "http://localhost:3000",
  JWT_SECRET: process.env.JWT_SECRET || "JWT_SECRET",
};
