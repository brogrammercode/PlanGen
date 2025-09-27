import { CredentialDTO } from "@/types";
import { getNameFromEmail, getUsernameFromEmail } from "@/utils";
import { PrismaClient, User } from "@prisma/client";

export interface IAuthRepository {
  createUser(data: CredentialDTO): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}

const prisma = new PrismaClient();

export class AuthRepositoryImpl implements IAuthRepository {
  async createUser(data: CredentialDTO): Promise<User> {
    const name = getNameFromEmail(data.email);
    const username = getUsernameFromEmail(data.email);
    return prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        name: name,
        username: username,
      },
    });
  }

  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}
