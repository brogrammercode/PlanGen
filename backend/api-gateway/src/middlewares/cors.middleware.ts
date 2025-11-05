import { env } from "@/core/env";
import cors from "cors";

export const corsMiddleware = cors({
  origin: env.ALLOWED_ORIGINS.split(","),
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],
});
