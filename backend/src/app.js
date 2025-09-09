import express from "express";
import { initLogger } from "./utils/logger.js";
import userRoutes from "./routes/user_routes.js";
import templateRoutes from "./routes/template_routes.js";
import planRoutes from "./routes/plan_routes.js";
import path from "path";
import env from "./config/env.js";
const { NODE_ENV } = env;

const app = express();
app.use(initLogger);
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/templates", templateRoutes);
app.use("/api/plans", planRoutes);
if (NODE_ENV == "pro") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

export default app;
