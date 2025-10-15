import { Request, Response } from "express";
import { AuthService } from "@/services";
import { asyncHandler, authDto, ServerResponse } from "@/types";

export class AuthController {
  constructor(private authService: AuthService) {}

  register = asyncHandler(async (req: Request, res: Response) => {
    const dto: authDto = req.body;
    const result = await this.authService.register(dto);
    // cookie config remaining
    return ServerResponse.success(
      res,
      result,
      "User registered successfully",
      201
    );
  });

  login = asyncHandler(async (req: Request, res: Response) => {});
}
