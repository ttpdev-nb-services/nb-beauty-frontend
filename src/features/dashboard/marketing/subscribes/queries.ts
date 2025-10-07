import { queryOptions } from "@tanstack/react-query";
import subscribeServices from "./services";

export const subscribeQueries = {
  index: () => ["subscribes"],
  list: () =>
    queryOptions({
      queryKey: subscribeQueries.index(),
      queryFn: () => subscribeServices.list(),
    }),
};
