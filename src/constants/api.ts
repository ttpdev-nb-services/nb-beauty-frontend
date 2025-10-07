const BASE_SUBSCRIBE = "/api/v1/subscribes";
const BASE_DASHBOARD_CATEGORY = "/api/v1/dashboard/categories";
const BASE_DASHBOARD_SUBSCRIBE = "/api/v1/dashboard/subscribes";

export const BaseApi = {
  subscribe: {
    base: BASE_SUBSCRIBE,
    email: () => `${BASE_SUBSCRIBE}/email`,
    dashboard: {
      base: BASE_DASHBOARD_SUBSCRIBE,
      cancel: (id: number) => `${BASE_DASHBOARD_SUBSCRIBE}/${id}/cancel`,
    },
  },
  categories: {
    base: BASE_DASHBOARD_CATEGORY,
    delete: (id: number) => `${BASE_DASHBOARD_CATEGORY}/${id}`,
    detail: (id: number) => `${BASE_DASHBOARD_CATEGORY}/${id}`,
    update: (id: number) => `${BASE_DASHBOARD_CATEGORY}/${id}`,
  },
};
