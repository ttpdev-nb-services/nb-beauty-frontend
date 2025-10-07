import { DeleteCategoryPage } from "@/features/dashboard/categories/pages/delete-category-page";
import { PageParamsProps } from "@/types/default-props";

export default async function page({
  params,
}: PageParamsProps<{
  id: number;
}>) {
  const { id } = await params;

  return <DeleteCategoryPage id={id} />;
}
