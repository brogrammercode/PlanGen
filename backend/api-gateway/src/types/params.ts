import { NextFunction, Request, Response } from "express";

export type FunctionParam = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;
