import express from "express";
import dotenv from "dotenv";
dotenv.config();
import helmet from "helmet";
import cookieParser from "cookie-parser";
import routes from "./routes";
import { corsMiddleware, errorMiddleware, reqMiddleware } from "./middlewares";
import { env, initShutdown, logger } from "./core";

console.log("REDIS_HOST:", process.env.REDIS_HOST);
console.log("REDIS_PORT:", process.env.REDIS_PORT);
console.log("IS_DOCKER:", process.env.IS_DOCKER);
console.log("REDIS_PORT:", env.REDIS_PORT);

const app = express();

app.use(helmet());
app.use(corsMiddleware);
app.use(reqMiddleware);
app.use(express.json());
app.use(cookieParser());
app.use(routes);
app.use(errorMiddleware);

const server = app.listen(env.PORT, () => {
  logger.info(`${env.SERVICE_NAME} is running on port:${env.PORT}`);
});

initShutdown(server);
