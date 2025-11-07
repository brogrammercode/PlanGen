import express from "express";
import dotenv from "dotenv";
import "module-alias/register";
dotenv.config();
import helmet from "helmet";
import cookieParser from "cookie-parser";
// import routes from "./routes";
import { corsMiddleware, errorMiddleware, reqMiddleware } from "./middlewares";
import { env, initShutdown, logger } from "./core";
import { setupProxies } from "./proxy";

const app = express();

app.use(helmet());
app.use(corsMiddleware);
app.use(reqMiddleware);
app.use(express.json());
app.use(cookieParser());
// app.use(routes);
setupProxies(app);
app.use(errorMiddleware);

const server = app.listen(env.PORT, () => {
  logger.info(`${env.SERVICE_NAME} is running on port:${env.PORT}`);
});

initShutdown(server);
