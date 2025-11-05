import { env } from "@/core";
import rateLimit, { RateLimitRequestHandler } from "express-rate-limit";

export const rateLimitMiddleware = (
  maxRequests: number = env.RATE_LIMIT_MAX_REQUESTS,
  windowMs: number = env.RATE_LIMIT_WINDOW_MS
): RateLimitRequestHandler =>
  rateLimit({
    windowMs,
    max: maxRequests,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      success: false,
      message: "Too many requests, please try again later.",
    },
  });

export const rateLimiter = rateLimitMiddleware();
export const rateLimitLogin = rateLimitMiddleware(5, 15 * 60 * 1000);
export const rateLimitRegister = rateLimitMiddleware(3, 60 * 60 * 1000);
