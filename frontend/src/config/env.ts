interface Env {
  // API Configuration
  VITE_API_BASE_URL: string;
  VITE_API_VERSION: string;
  VITE_API_TIMEOUT: number;
}

function getEnv(key: string, defaultValue?: any): any {
  return import.meta.env[key] || defaultValue || "";
}

export const env: Env = {
  VITE_API_BASE_URL: getEnv("VITE_API_BASE_URL"),
  VITE_API_VERSION: getEnv("VITE_API_VERSION"),
  VITE_API_TIMEOUT: getEnv("VITE_API_TIMEOUT"),
};
