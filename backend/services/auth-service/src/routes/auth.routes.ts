import { AuthController } from "@/controllers";
import { Bcrypter } from "@/infrastructure";
import {
  authenticate,
  rateLimit,
  rateLimitLogin,
  rateLimitRegister,
  validate,
} from "@/middlewares";
import { AuthRepository, CacheRepository, UserRepository } from "@/repos";
import {
  AuthService,
  CacheService,
  CookieService,
  TokenService,
  UserService,
} from "@/services";
import { loginSchema, refreshSchema, registerSchema } from "@/validations";
import { Router } from "express";

const authRoutes = Router();
const userRepository = new UserRepository();
const authRepository = new AuthRepository();
const cacheRepository = new CacheRepository();
const bcrypt = new Bcrypter();
const userService = new UserService(userRepository, bcrypt);
const tokenService = new TokenService();
const cacheService = new CacheService(cacheRepository);
const authService = new AuthService(
  authRepository,
  userService,
  tokenService,
  cacheService
);
const cookieService = new CookieService();
const controller = new AuthController(authService, cookieService);

authRoutes.post(
  "/register",
  rateLimitRegister,
  validate(registerSchema),
  controller.register.bind(controller)
);
authRoutes.post(
  "/login",
  rateLimitLogin,
  validate(loginSchema),
  controller.login.bind(controller)
);
authRoutes.get("/refresh", rateLimit, controller.refresh.bind(controller));
authRoutes.get("/logout", authenticate, controller.logout.bind(controller));

export default authRoutes;
