import { logger } from "@/core";
import { ServerResponse } from "@/types";
import { fixRequestBody } from "http-proxy-middleware";

const X_REQUEST_ID = "X-Request-ID";
const X_GATEWAY_TIME = "X-Gateway-Time";

const X_USER_ID = "X-User-ID";
const X_USER_EMAIL = "X-User-Email";

export const onProxyReq = (proxyReq: any, req: any, _res: any) => {
  const requestId = `${Date.now()}-${Math.random()
    .toString(36)
    .substring(2, 15)}`;
  proxyReq.setHeader(X_REQUEST_ID, requestId);
  proxyReq.setHeader(X_GATEWAY_TIME, new Date().toISOString());

  if (req.body) fixRequestBody(proxyReq, req);
  logger.debug(`[PROXY] [${req.method}] ${req.path} -> ${proxyReq.path}`);
  if (req.user) {
    proxyReq.setHeader(X_USER_ID, req.user.userId);
    proxyReq.setHeader(X_USER_EMAIL, req.user.email);
  }
};

export const onProxyRes = (proxyRes: any, req: any) => {
  const duration = Date.now() - (req._startTime || Date.now());
  logger.debug(
    `[PROXY] [${req.method}] ${req.path} <- ${proxyRes.statusCode} in (${duration}ms) `
  );
};

export const onProxyError = (err: any, req: any, res: any) => {
  logger.error(
    `[PROXY ERROR] [${req.method}] ${req.path} -> Error: ${err.message}`
  );
  return ServerResponse.error(
    res,
    `[PROXY ERROR] [${req.method}] ${req.path} -> Error: ${err.message}`,
    502
  );
};
