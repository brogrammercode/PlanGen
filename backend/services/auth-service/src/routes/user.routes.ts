import { UserController } from "@/controllers/user.controller";
import { Router } from "express";

const userRoutes = Router();
const controller = new UserController();

userRoutes.get("/", controller.getUser.bind(controller));

export default userRoutes;
