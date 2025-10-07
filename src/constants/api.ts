const BASE_SUBSCRIBE = "/api/v1/subscribes";
const BASE_DASHBOARD_CATEGORY = "/api/v1/dashboard/categories";

export const BaseApi = {
  subscribe: {
    base: BASE_SUBSCRIBE,
    email: () => `${BASE_SUBSCRIBE}/email`,
  },
  categories: {
    base: () => BASE_DASHBOARD_CATEGORY,
    delete: (id: number) => `${BASE_DASHBOARD_CATEGORY}/${id}`,
    detail: (id: number) => `${BASE_DASHBOARD_CATEGORY}/${id}`,
    update: (id: number) => `${BASE_DASHBOARD_CATEGORY}/${id}`,
  },
};
