import { AuthController } from "@/api/auth.controller";
import { Router } from "express";

const authRoutes = Router();
const controller = new AuthController();

authRoutes.post("/register", controller.register.bind(controller));
authRoutes.post("/login", controller.login.bind(controller));
authRoutes.get("/refresh", controller.refresh.bind(controller));
authRoutes.get("/logout", controller.logout.bind(controller));
authRoutes.get("/email/verify/:code", controller.verifyEmail.bind(controller));
authRoutes.get("/password/forgot", controller.forgotPassword.bind(controller));
authRoutes.get("/password/reset", controller.resetPassword.bind(controller));

export default authRoutes;
