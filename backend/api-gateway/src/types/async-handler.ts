import { Request, Response, NextFunction } from "express";
import { FunctionParam } from "./params";

export const asyncHandler = (fn: FunctionParam) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export class ServerError extends Error {
  constructor(public statusCode: number, public message: string) {
    super(message);
  }
}
