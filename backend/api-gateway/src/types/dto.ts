export interface authDto {
  email: string;
  password: string;
}

export interface JwtPayload {
  userId: string;
  email: string;
  type: "access" | "refresh";
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}
