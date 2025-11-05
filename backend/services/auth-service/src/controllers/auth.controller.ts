import { Request, Response } from "express";
import { AuthService, CookieService } from "@/services";
import { asyncHandler, authDto, ServerResponse, TokenPair } from "@/types";

export class AuthController {
  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  register = asyncHandler(async (req: Request, res: Response) => {
    const dto: authDto = req.body;
    const result = await this.authService.register(dto);
    this.cookieService.setTokens(res, result.tokens);
    return ServerResponse.success(res, result, "User registered", 201);
  });

  login = asyncHandler(async (req: Request, res: Response) => {
    const dto: authDto = req.body;
    const result = await this.authService.login(dto);
    this.cookieService.setTokens(res, result.tokens);
    return ServerResponse.success(res, result, "User login successfully");
  });

  logout = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user?.userId || "";
    const refreshToken = req.cookies.refreshToken || req.body.refreshToken;
    await this.authService.logout(userId, refreshToken);
    this.cookieService.deleteTokens(res);
    return ServerResponse.success(res, null, "Logout successful");
  });

  refresh = asyncHandler(async (req: Request, res: Response) => {
    const refreshToken = req.cookies.refreshToken || req.body.refreshToken;
    if (!refreshToken) {
      return ServerResponse.error(res, "Refresh token not provided", 401);
    }
    const tokens: TokenPair = await this.authService.refresh(refreshToken);
    this.cookieService.setTokens(res, tokens);
    return ServerResponse.success(res, tokens, "Tokens refreshed");
  });
}
