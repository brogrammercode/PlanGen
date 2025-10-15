import { env } from "@/core";

export const rateLimitMiddleware = (
  maxRequests: number = env.,
  windowMs: number
) => {};

export const rateLimit = rateLimitMiddleware();
export const rateLimitLogin = rateLimitMiddleware(5, 15 * 60 * 1000);
export const rateLimitRegister = rateLimitMiddleware(3, 60 * 60 * 1000);
