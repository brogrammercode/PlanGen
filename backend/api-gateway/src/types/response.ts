import { INTERNAL_SERVER_ERROR, OK } from "@/constants";
import { Response } from "express";

export class ServerResponse {
  static success(
    res: Response,
    data: any = {},
    message: string = "Success",
    statusCode: number = OK
  ): Response {
    return res.status(statusCode).json({
      success: true,
      message: message,
      data: data,
      timestamp: new Date().toISOString(),
    });
  }

  static error(
    res: Response,
    message: string = "An error occurred",
    statusCode: number = INTERNAL_SERVER_ERROR,
    errors?: any
  ): Response {
    return res.status(statusCode).json({
      success: false,
      message: message,
      ...(errors && { errors }),
    });
  }
}
