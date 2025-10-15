import { logger } from "@/core";
import { ServerResponse } from "@/types";
import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  logger.error("Error:", {
    message: error.message,
    stack: error.stack,
    url: req.url,
    path: req.path,
    method: req.method,
    body: req.body,
    query: req.query,
  });

  return ServerResponse.error(res, `Error in ${req.url}`);
};
