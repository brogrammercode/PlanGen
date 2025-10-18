import { env } from "./env";

export interface AUTH_ENDPOINTS {
  REGISTER: "/auth/register";
  LOGIN: "/auth/login";
  LOGOUT: "/auth/logout";
  REFRESH: "/auth/refresh";
}

export const API_CONFIG = {
  baseUrl: `${env.VITE_API_BASE_URL}`,
  timeout: env.VITE_API_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
};
