import { env } from "@/core";
import { JwtPayload, TokenPair } from "@/types";
import jwt, { SignOptions, Secret } from "jsonwebtoken";

interface TokenParam {
  userId: string;
  email: string;
  type: "access" | "refresh";
}

export class TokenService {
  generateToken(payload: TokenParam): string {
    const isAccess = payload.type === "access";

    const secret: Secret = isAccess
      ? (env.ACCESS_TOKEN_SECRET as string)
      : (env.REFRESH_TOKEN_SECRET as string);

    const expiresIn = isAccess
      ? (env.ACCESS_TOKEN_EXP as SignOptions["expiresIn"])
      : (env.REFRESH_TOKEN_EXP as SignOptions["expiresIn"]);

    return jwt.sign(payload, secret, { expiresIn });
  }

  generateTokenPair(userId: string, email: string): TokenPair {
    return {
      accessToken: this.generateToken({ userId, email, type: "access" }),
      refreshToken: this.generateToken({ userId, email, type: "refresh" }),
    };
  }

  verifyToken(token: string, type: "access" | "refresh"): JwtPayload {
    const secret: Secret =
      type === "access"
        ? (env.ACCESS_TOKEN_SECRET as string)
        : (env.REFRESH_TOKEN_SECRET as string);

    return jwt.verify(token, secret) as JwtPayload;
  }

  getTokenExpiry(token: string): Date | null {
    const decoded = jwt.decode(token) as any;
    if (decoded && decoded.exp) {
      return new Date(decoded.exp * 1000);
    }
    return null;
  }
}
