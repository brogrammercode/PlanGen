import { logger, env } from "@/core";
import { ServerResponse } from "@/types";
import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  const isDevelopment = env.NODE_ENV === "development";
  
  logger.error("Error:", {
    message: error.message,
    stack: error.stack,
    url: req.url,
    path: req.path,
    method: req.method,
    ...(isDevelopment && { body: req.body, query: req.query }),
  });

  // Hide stack traces and sensitive info in production
  const errorMessage = isDevelopment
    ? `Error in ${req.url}: ${error.message}`
    : "An error occurred. Please try again later.";

  return ServerResponse.error(res, errorMessage);
};
