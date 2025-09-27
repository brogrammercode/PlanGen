import bcrypt from "bcryptjs";

export class Bcrypter {
  async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
  }

  async verify(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
