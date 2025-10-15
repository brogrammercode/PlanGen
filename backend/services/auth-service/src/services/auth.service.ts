import { AuthRepository } from "@/repos";
import { UserService, TokenService, CacheService } from ".";
import { authDto, JwtPayload, ServerError, TokenPair } from "@/types";
import { User } from "@prisma/client";
import { env } from "@/core";

interface AuthResult {
  user: User;
  tokens: TokenPair;
}

export class AuthService {
  constructor(
    private authRepo: AuthRepository,
    private userService: UserService,
    private tokenService: TokenService,
    private cacheService: CacheService
  ) {}

  async register(dto: authDto): Promise<AuthResult> {
    const user = await this.userService.createUser(dto.email, dto.password);
    const tokens = this.tokenService.generateTokenPair(user.id, dto.email);
    // get refresh token expiry [token service]
    // store refresh token in refresh-token [auth repo]
    // get refresh token ttl [env]
    // cache refresh token [cache service]
    const refreshTokenExpiry = this.tokenService.getTokenExpiry(
      tokens.refreshToken
    );
    if (refreshTokenExpiry) {
      await this.authRepo.storeRefreshToken(
        user.id,
        tokens.refreshToken,
        refreshTokenExpiry
      );
    }
    const refreshTokenTTL = env.REFRESH_TOKEN_EXP_IN_NUM;
    await this.cacheService.setRefreshToken({
      userId: user.id,
      token: tokens.refreshToken,
      ttl: refreshTokenTTL,
    });
    const result = { user, tokens };
    return result;
  }

  async login(dto: authDto): Promise<AuthResult> {
    const user = await this.userService.validateCredential(
      dto.email,
      dto.password
    );
    const tokens = this.tokenService.generateTokenPair(user.id, dto.email);
    const refreshTokenExpiry = this.tokenService.getTokenExpiry(
      tokens.refreshToken
    );
    if (refreshTokenExpiry) {
      await this.authRepo.storeRefreshToken(
        user.id,
        tokens.refreshToken,
        refreshTokenExpiry
      );
    }
    const refreshTokenTTL = env.REFRESH_TOKEN_EXP_IN_NUM;
    await this.cacheService.setRefreshToken({
      userId: user.id,
      token: tokens.refreshToken,
      ttl: refreshTokenTTL,
    });
    const result = { user, tokens };
    return result;
  }

  async refresh(refreshToken: string): Promise<TokenPair> {
    // verify refresh token [token service] and get payload
    // get refresh token data [auth repo]
    // check refresh token in cache [cache service]
    // get user from payload.userId [user service]
    // revoke refresh token [auth repo]
    // delete refresh token from cache [cache service]
    // generate new tokens [token service]
    //
    // get refresh token expiry [token service]
    // store refresh token in refresh-token [auth repo]
    // get refresh token ttl [env]
    // cache refresh token [cache service]
    //
    // return tokens
    let payload;

    try {
      payload = this.tokenService.verifyToken(
        refreshToken,
        "refresh"
      ) as JwtPayload;
    } catch (error) {
      throw new ServerError(401, "Invalid or expired refresh token");
    }

    const storedToken = await this.authRepo.findRefreshToken(refreshToken);

    if (!storedToken || storedToken.revoked) {
      throw new ServerError(401, "Refresh token has been revoked");
    }

    const isValidInCache = await this.cacheService.checkRefreshTokenExists({
      userId: payload.userId,
      token: refreshToken,
    });

    if (!isValidInCache) {
      throw new ServerError(401, "Refresh token not found in cache");
    }

    const user = await this.userService.getUserById(payload.userId);
    await this.authRepo.revokeRefreshToken(storedToken.id);
    await this.cacheService.deleteRefreshToken({
      userId: payload.userId,
      token: refreshToken,
    });
    const tokens = this.tokenService.generateTokenPair(user.id, user.email);
    const newRefreshTokenExpiry = this.tokenService.getTokenExpiry(
      tokens.refreshToken
    );
    if (newRefreshTokenExpiry) {
      await this.authRepo.storeRefreshToken(
        user.id,
        tokens.refreshToken,
        newRefreshTokenExpiry
      );
    }
    const refreshTTL = env.REFRESH_TOKEN_EXP_IN_NUM;
    await this.cacheService.setRefreshToken({
      userId: user.id,
      token: tokens.refreshToken,
      ttl: refreshTTL,
    });

    return tokens;
  }

  async logout(userId: string, refreshToken?: string): Promise<void> {
    if (refreshToken) {
      const storedToken = await this.authRepo.findRefreshToken(refreshToken);
      if (storedToken && !storedToken.revoked) {
        await this.authRepo.revokeRefreshToken(storedToken.id);
      }
      await this.cacheService.deleteRefreshToken({
        userId,
        token: refreshToken,
      });
    }
  }
}
