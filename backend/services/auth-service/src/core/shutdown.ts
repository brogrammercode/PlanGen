import { Server } from "http";
import logger from "./logger";

export const initShutdown = (server: Server) => {
  const shutdown = async (signal: string) => {
    try {
      await new Promise<void>((resolve) => {
        server.close(() => {
          logger.info(`Server Closed`);
          resolve();
        });
      });
      process.exit(0);
    } catch (error) {
      logger.error(`Error during shutdown`, error);
      process.exit(1);
    }
  };

  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));

  process.on("uncaughtException", (error) => {
    logger.error("Uncaught Exception", error);
    shutdown("uncaughtException");
  });

  process.on("unhandledRejection", (reason, promise) => {
    logger.error("Unhandled Rejection at:", promise, "reason:", reason);
    shutdown("unhandledRejection");
  });
};
