import { ViewCategoryPage } from "@/features/dashboard/categories/pages/view-category-page";
import { PageParamsProps } from "@/types/default-props";

export default async function Page({
  params,
}: PageParamsProps<{
  id: number;
}>) {
  const { id } = await params;

  return <ViewCategoryPage id={id} />;
}
