import { logger } from "@/core";
import { CacheRepository } from "@/repos";
import { CacheService, TokenService } from "@/services";
import { JwtPayload, ServerResponse } from "@/types";
import { Request, Response, NextFunction } from "express";

const tokenService = new TokenService();
const cacheRepository = new CacheRepository();
const cacheService = new CacheService(cacheRepository);

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return ServerResponse.error(res, "No token provided", 401) as any;
    }
    const token = authHeader.substring(7);
    const payload: JwtPayload = tokenService.verifyToken(token, "access");
    // logger.info(`payload: ${JSON.stringify(payload)}, token: ${token}`);
    // const exists = await cacheService.checkAccessTokenExists({
    //   userId: payload.userId,
    //   token: token,
    // });
    // if (!exists) {
    //   return ServerResponse.error(res, "Token has been revoked", 401) as any;
    // }
    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};
