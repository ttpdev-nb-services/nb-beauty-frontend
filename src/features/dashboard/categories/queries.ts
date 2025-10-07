import { queryOptions } from "@tanstack/react-query";
import categoryServices from "./services";

export const categoryQueries = {
  index: () => ["categories"],
  listCategories: () =>
    queryOptions({
      queryKey: [...categoryQueries.index()],
      queryFn: () => categoryServices.list(),
    }),
  getById: (id: number) =>
    queryOptions({
      queryFn: () => categoryServices.detail(id),
      queryKey: [...categoryQueries.index(), id],
    }),
};
