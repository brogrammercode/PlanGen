import { env } from "@/core";
import { TokenPair } from "@/types";
import { CookieOptions, Response } from "express";

const COOKIE_OPTION: CookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: true,
  domain: "",
  maxAge: env.COOKIE_MAX_AGE,
};

const REFRESH_TOKEN_KEY = "refreshToken";
const ACCESS_TOKEN_KEY = "accessToken";

export class CookieService {
  setTokens(res: Response, tokens: TokenPair) {
    res.cookie(REFRESH_TOKEN_KEY, tokens.refreshToken, COOKIE_OPTION);
    res.cookie(ACCESS_TOKEN_KEY, tokens.accessToken, COOKIE_OPTION);
  }

  deleteTokens(res: Response) {
    res.clearCookie(REFRESH_TOKEN_KEY);
    res.clearCookie(ACCESS_TOKEN_KEY);
  }
}
