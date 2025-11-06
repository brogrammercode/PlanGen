// the services will have the endpoints such as localhost:3001/auth/health, localhost:3002/templates/health, etc. But the api gateway will expose them as localhost:3000/api/v1/auth/health, localhost:3000/api/v1/templates/health, etc.

import { createProxyMiddleware } from "http-proxy-middleware";
import { onProxyError, onProxyReq, onProxyRes } from ".";
import { Application, RequestHandler } from "express";
import { env } from "@/core";
import { rateLimiter } from "@/middlewares";

interface ProxyParams {
  target: string;
  pathRewrite: Record<string, string>;
  middlewares: RequestHandler[];
}

const createProxy = ({ target, pathRewrite, middlewares }: ProxyParams) => [
  ...middlewares,
  createProxyMiddleware({
    target: target,
    changeOrigin: true,
    pathRewrite: pathRewrite,
    timeout: 5000,
    on: {
      proxyReq: onProxyReq,
      proxyRes: onProxyRes,
      error: onProxyError,
    },
  }),
];

export const setupProxies = (app: Application) => {
  app.use(
    "/api/v1/auth",
    ...createProxy({
      target: env.AUTH,
      pathRewrite: { "^/api/v1/auth": "/api/auth" },
      middlewares: [rateLimiter],
    })
  );

  app.use(
    "/api/v1/templates",
    ...createProxy({
      target: env.TEMPLATE,
      pathRewrite: { "^/api/v1/templates": "/api/templates" },
      middlewares: [rateLimiter],
    })
  );

  app.use(
    "/api/v1/plans",
    ...createProxy({
      target: env.PLAN,
      pathRewrite: { "^/api/v1/plans": "/api/plans" },
      middlewares: [rateLimiter],
    })
  );
};
