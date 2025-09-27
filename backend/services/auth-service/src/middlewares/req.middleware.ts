import logger from "@/core/logger";
import { Request, Response, NextFunction } from "express";

export const reqMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.debug(`[${req.method}] -> [${req.originalUrl}]`);
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    logger.info(
      `[${req.method}] [${req.originalUrl}] -> [STATUS: ${res.statusCode} in ${duration}ms]`
    );
  });

  next();
};
