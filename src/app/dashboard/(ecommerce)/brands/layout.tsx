import { ListBrandsPage } from "@/features/dashboard/ecommerce/brands/pages/list-brands-page";
import { ChildrenProps } from "@/types/default-props";

export default function layout({ children }: ChildrenProps) {
  return (
    <>
      <ListBrandsPage />
      {children}
    </>
  );
}
