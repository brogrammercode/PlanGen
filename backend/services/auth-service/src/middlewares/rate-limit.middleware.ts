import { env } from "@/core";
import { CacheRepository } from "@/repos";
import { CacheService } from "@/services";
import { ServerResponse } from "@/types";
import { Request, Response, NextFunction } from "express";

const cacheRepository = new CacheRepository();
const cacheService = new CacheService(cacheRepository);
const X_LIMIT_HEADER = "X-RateLimit-Limit";
const X_REMAINING_HEADER = "X-RateLimit-Remaining";

export const rateLimitMiddleware = (
  maxRequests: number = env.RATE_LIMIT_MAX_REQUESTS,
  windowMs: number = env.RATE_LIMIT_WINDOW_MS
) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const identfier = req.ip || req.socket.remoteAddress || "unknown";
    const key = `rate-limit:${identfier}`;
    try {
      const ttl = Math.floor(windowMs / 1000);
      const reqCount = await cacheService.increaseRequestCount(key, ttl);
      res.setHeader(X_LIMIT_HEADER, maxRequests);
      res.setHeader(X_REMAINING_HEADER, Math.max(0, maxRequests - reqCount));
      if (reqCount > maxRequests) {
        return ServerResponse.error(
          res,
          "Too many requests, please try again later",
          429
        ) as any;
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

export const rateLimit = rateLimitMiddleware();
export const rateLimitLogin = rateLimitMiddleware(5, 15 * 60 * 1000);
export const rateLimitRegister = rateLimitMiddleware(3, 60 * 60 * 1000);
