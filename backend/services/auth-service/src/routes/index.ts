import { Router } from "express";
import authRoutes from "./auth.routes";
import { asyncHandler, ServerResponse } from "@/types";

const routes = Router();

routes.get(
  "/health",
  asyncHandler(async (_, res) => {
    return ServerResponse.success(res, {
      status: "OK",
      service: "AUTH SERVICE",
    });
  })
);

routes.use("/auth", authRoutes);

export default routes;
