import { CacheRepository } from "@/repos";
import { TokenPair } from "@/types";

interface TokenCacheParam {
  userId: string;
  token: string;
  ttl?: number | 1000;
}

export class CacheService {
  constructor(private cacheRepo: CacheRepository) {}

  private getTokens(param: TokenCacheParam): TokenPair {
    const accessToken = `access:${param.userId}:${param.token}`;
    const refreshToken = `refresh:${param.userId}:${param.token}`;
    return { accessToken, refreshToken };
  }

  async setAccessToken(param: TokenCacheParam): Promise<void> {
    const tokens = this.getTokens(param);
    await this.cacheRepo.set(tokens.accessToken, { valid: true }, param.ttl);
  }

  async checkAccessTokenExists(param: TokenCacheParam): Promise<boolean> {
    const tokens = this.getTokens(param);
    return await this.cacheRepo.exists(tokens.accessToken);
  }

  async deleteAccessToken(param: TokenCacheParam): Promise<void> {
    const tokens = this.getTokens(param);
    await this.cacheRepo.delete(tokens.accessToken);
  }

  async setRefreshToken(param: TokenCacheParam): Promise<void> {
    const tokens = this.getTokens(param);
    await this.cacheRepo.set(tokens.refreshToken, { valid: true }, param.ttl);
  }

  async checkRefreshTokenExists(param: TokenCacheParam): Promise<boolean> {
    const tokens = this.getTokens(param);
    return await this.cacheRepo.exists(tokens.refreshToken);
  }

  async deleteRefreshToken(param: TokenCacheParam): Promise<void> {
    const tokens = this.getTokens(param);
    await this.cacheRepo.delete(tokens.refreshToken);
  }

  async increaseRequestCount(key: string, ttl?: number): Promise<number> {
    return await this.cacheRepo.increment(key, ttl);
  }
}
