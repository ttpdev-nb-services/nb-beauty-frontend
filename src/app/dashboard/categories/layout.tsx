import { ListCategoriesPage } from "@/features/dashboard/categories/pages/list-categories-page";
import { ChildrenProps } from "@/types/default-props";

export default function layout({ children }: ChildrenProps) {
  return (
    <>
      <ListCategoriesPage />
      {children}
    </>
  );
}
