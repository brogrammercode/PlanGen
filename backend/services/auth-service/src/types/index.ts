import { User } from "@prisma/client";

export class ServerError extends Error {
  status?: string;
  statusCode?: number;
}

export class ServerResponse extends Response {
  success: boolean;
  message: string;
  data: any;
  meta: any;
  constructor(success: boolean, message: string, data: any, meta: any = {}) {
    const body = JSON.stringify({ success, message, data, meta });
    const init = { headers: { "Content-Type": "application/json" } };
    super(body, init);
    this.success = success;
    this.message = message;
    this.data = data;
    this.meta = meta;
  }
}

export type CredentialDTO = {
  email: string;
  password: string;
};

export type RegisteredUserDTO = {
  user: User;
  token: string;
};
