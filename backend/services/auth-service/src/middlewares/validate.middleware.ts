import { ServerResponse } from "@/types";
import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { AnyZodObject } from "zod/v3";

export const validate = (schema: AnyZodObject) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return ServerResponse.error(
          res,
          "Validation Error",
          400,
          error.flatten()
        );
      }
      next(error);
    }
  };
};
