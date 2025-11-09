import axios, { type CreateAxiosDefaults } from "axios";
import { env } from "./env";

export const API_CONFIG: CreateAxiosDefaults = {
  baseURL: `${env.VITE_API_BASE_URL}`,
  timeout: env.VITE_API_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
};

export const axiosInstance = axios.create(API_CONFIG);
