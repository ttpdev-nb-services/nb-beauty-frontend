"use client";

import { CustomDialog } from "@/components/customs/custom-dialog";
import { BASE_ROUTE } from "@/constants/route";
import { useNavigate } from "@/hooks/use-navigate";
import { Edit } from "lucide-react";
import { EditCategoryForm } from "../components/edit-category-form";
import { useQuery } from "@tanstack/react-query";
import { categoryQueries } from "../queries";

type EditCategoryPageProps = {
  id: number;
};
export const EditCategoryPage = ({ id }: EditCategoryPageProps) => {
  const { handleNavigate } = useNavigate();

  const { data, isLoading } = useQuery({
    ...categoryQueries.getById(id),
  });

  return (
    <CustomDialog
      open
      loading={isLoading}
      setOpen={() => handleNavigate(BASE_ROUTE.categories.base)}
      title="Cập nhật danh mục"
      icon={<Edit className="text-yellow-500" />}
      description="Mô tả về cập nhật danh mục"
    >
      <EditCategoryForm id={id} defaultValues={data?.data} />
    </CustomDialog>
  );
};
