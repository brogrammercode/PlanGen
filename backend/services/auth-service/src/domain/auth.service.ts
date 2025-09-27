import { RegisteredUserDTO } from "@/types";
import { Bcrypter } from "@/infrastructure/security/bcrypt";
import { Jwt } from "@/infrastructure/security/jwt";
import { CredentialDTO, ServerError } from "./../types/index";
import { AuthRepositoryImpl, IAuthRepository } from "./auth.repository";
import { CacheRepositoryImpl, ICacheRepository } from "./cache.repository";

export class AuthService {
  private repo: IAuthRepository;
  private cache: ICacheRepository;
  private bcrypter: Bcrypter;
  private jwt: Jwt;

  constructor(
    repo?: IAuthRepository,
    cache?: ICacheRepository,
    bcrypter?: Bcrypter,
    jwt?: Jwt
  ) {
    this.repo = repo || new AuthRepositoryImpl();
    this.cache = cache || new CacheRepositoryImpl();
    this.bcrypter = bcrypter || new Bcrypter();
    this.jwt = jwt || new Jwt();
  }

  async register(data: CredentialDTO): Promise<RegisteredUserDTO> {
    const existing = await this.repo.findByEmail(data.email);
    if (existing) throw new ServerError("Email already in use");
    const hashpass = await this.bcrypter.hash(data.password);
    data.password = hashpass;
    const token = this.jwt.generate(data);
    const user = await this.repo.createUser(data);
    await this.cache.cacheUser(user);
    await this.cache.cacheToken({
      user: user,
      token: token,
    });
    return {
      user: user,
      token: token,
    };
  }

  async login(credential: CredentialDTO): Promise<RegisteredUserDTO> {
    const existing = await this.repo.findByEmail(credential.email);
    if (!existing) throw new ServerError("Invalid credentials");
    const validPass = await this.bcrypter.verify(
      credential.password,
      existing.password
    );
    if (!validPass) throw new ServerError("Invalid credentials");
    const token = this.jwt.generate(credential);
    await this.cache.cacheUser(existing);
    await this.cache.cacheToken({
      user: existing,
      token: token,
    });
    return {
      user: existing,
      token: token,
    };
  }
}
