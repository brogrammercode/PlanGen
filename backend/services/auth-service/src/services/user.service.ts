import { Bcrypter } from "@/infrastructure";
import { UserRepository } from "@/repos";
import { ServerError } from "@/types";
import { User } from "@prisma/client";

export class UserService {
  constructor(private userRepo: UserRepository, private bcrypt: Bcrypter) {}

  async createUser(email: string, password: string): Promise<User> {
    const existingUser = await this.userRepo.findByEmail(email);
    if (existingUser)
      throw new ServerError(409, "User with this email already exists");
    const hashpass = await this.bcrypt.hash(password);
    const user = await this.userRepo.create(email, hashpass);
    return user;
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepo.findById(id);
    if (!user) throw new ServerError(404, "User not found");
    return user;
  }

  async validateCredential(email: string, password: string): Promise<User> {
    const user = await this.userRepo.findByEmail(email);
    if (!user) throw new ServerError(404, "User not found");
    const validPass = await this.bcrypt.verify(password, user.password);
    if (!validPass) throw new ServerError(404, "Invalid credentials");
    return user;
  }
}
