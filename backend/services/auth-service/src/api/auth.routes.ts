import { Router } from "express";
import { AuthController } from "./auth.controller";
import { env } from "@/core/env";

const authrouter = Router();
const corerouter = Router();
const controller = new AuthController();

authrouter.post("/register", controller.register.bind(controller));
authrouter.post("/login", controller.login.bind(controller));

corerouter.get("/health", async (req, res) =>
  res.json({ service: env.SERVICE_NAME, status: "OK" })
);

export { authrouter, corerouter };
