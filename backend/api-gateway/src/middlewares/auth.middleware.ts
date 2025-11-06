import { env } from "@/core";
import { ServerResponse } from "@/types";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

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
    const payload = jwt.verify(token, env.ACCESS_TOKEN_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};
