import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import { corsMiddleware } from "./middlewares/cors.middleware";
import { reqMiddleware } from "./middlewares/req.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";
import { env } from "./core/env";
import logger from "./core/logger";
import { initShutdown } from "./core/shutdown";
import { authrouter, corerouter } from "./api/auth.routes";
dotenv.config();

const app = express();

app.use(helmet());
app.use(corsMiddleware);
app.use(reqMiddleware);
app.use(express.json());
app.use("/", corerouter);
app.use("/api/v1/auth", authrouter);
app.use(errorMiddleware);

const server = app.listen(env.PORT, () => {
  logger.info(`${env.SERVICE_NAME} is running on port:${env.PORT}`);
});

initShutdown(server);
