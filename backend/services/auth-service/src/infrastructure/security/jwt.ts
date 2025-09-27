import jwt, { JwtPayload } from "jsonwebtoken";
import { CredentialDTO } from "@/types";
import { env } from "@/core/env";

export class Jwt {
  generate(payload: CredentialDTO): string {
    return jwt.sign(payload, env.JWT_SECRET);
  }

  verify(token: string): JwtPayload | string {
    return jwt.verify(token, env.JWT_SECRET);
  }
}
