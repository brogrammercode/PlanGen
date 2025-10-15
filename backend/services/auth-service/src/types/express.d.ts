import { JwtPayload } from "./dto";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
