import { useQuery } from "@tanstack/react-query";
import { categoryQueries } from "../queries";

export function useCategoryOptions() {
  const categories = useQuery({
    ...categoryQueries.listCategories(),
  });

  const categoriesOptions = (currentId?: number) => {
    return categories.data?.results
      .filter((c) => c.id !== currentId)
      .map((c) => ({
        label: c.name,
        value: c.id,
      }));
  };

  return {
    categoriesOptions,
  };
}
