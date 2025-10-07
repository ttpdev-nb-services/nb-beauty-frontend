import { EditCategoryPage } from "@/features/dashboard/categories/pages/edit-category-page";
import { PageParamsProps } from "@/types/default-props";

export default async function page({
  params,
}: PageParamsProps<{
  id: number;
}>) {
  const { id } = await params;

  return <EditCategoryPage id={id} />;
}
