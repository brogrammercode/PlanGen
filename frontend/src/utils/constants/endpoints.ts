export const API_ENDPOINTS = {
  AUTH: {
    HEALTH: "/auth/health",
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },

  TEMPLATES: {
    HEALTH: "/templates/health",
    GET: "/templates",
    ADD: "/templates",
    UPDATE: (templateId: string) => `/templates/${templateId}`,
    DELETE: (templateId: string) => `/templates/${templateId}`,
    SEARCH: (query: string) => `/templates/search/${query}`,
    BY_IDS: "/templates/by_ids",
    TRANSFORM: (templateId: string, uid: string) =>
      `/templates/transform/${templateId}/${uid}`,
  },
};
