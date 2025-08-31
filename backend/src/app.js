import express from "express";
import { initLogger } from "./utils/logger.js";
import userRoutes from "./routes/user_routes.js";
import templateRoutes from "./routes/template_routes.js";
import planRoutes from "./routes/plan_routes.js";
import path from "path";
const __dirname = path.resolve();

const app = express();
app.use(initLogger);
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/templates", templateRoutes);
app.use("/api/plans", planRoutes);
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

export default app;
