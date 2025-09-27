import { env } from "@/core/env";
import logger from "@/core/logger";
import { ServerError } from "@/types";
import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  error: ServerError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(error);

  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Service Error";
  const status = error.status || "error";

  if (env.NODE_ENV != "production") {
    logger.error({
      message,
      stack: error.stack,
      path: req.path,
      method: req.method,
      body: req.body,
      query: req.query,
    });
  }

  res.status(statusCode).json({
    status,
    message,
  });
};
