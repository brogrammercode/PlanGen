import { AuthService } from "@/domain/auth.service";
import { CredentialDTO, ServerResponse } from "@/types";
import { Request, Response } from "express";

export class AuthController {
  private service: AuthService;

  constructor(service?: AuthService) {
    this.service = service || new AuthService();
  }

  async register(req: Request, res: Response): Promise<Response> {
    const credential = req.body as CredentialDTO;
    const result = await this.service.register(credential);
    return res
      .status(201)
      .json(
        new ServerResponse(true, `REGGISTERED USER: ${result.user.id}`, result)
      );
  }

  async login(req: Request, res: Response): Promise<Response> {
    const credential = req.body as CredentialDTO;
    const result = await this.service.login(credential);
    return res
      .status(200)
      .json(
        new ServerResponse(true, `LOGGED IN USER: ${result.user.id}`, result)
      );
  }
}
