import { prisma } from "@/infrastructure";
import { getNameFromEmail, getUsernameFromEmail } from "@/utils";
import { User } from "@prisma/client";

export class UserRepository {
  constructor() {}

  async create(email: string, password: string): Promise<User> {
    const name: string = getNameFromEmail(email);
    const username: string = getUsernameFromEmail(email);
    return prisma.user.create({
      data: { email, password, name, username },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
  }
}
