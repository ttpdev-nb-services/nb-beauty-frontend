export const DASHBOARD_ROUTE = "/dashboard";

export const BASE_ROUTE = {
  categories: {
    base: `${DASHBOARD_ROUTE}/categories`,
    delete: (id: number | string) =>
      `${DASHBOARD_ROUTE}/categories/${id}/delete`,
    edit: (id: number | string) => `${DASHBOARD_ROUTE}/categories/${id}/edit`,
    view: (id: number | string) => `${DASHBOARD_ROUTE}/categories/${id}/view`,
    create: `${DASHBOARD_ROUTE}/categories/create`,
  },
};
