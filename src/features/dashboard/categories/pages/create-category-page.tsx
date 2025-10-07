"use client";

import { CustomDialog } from "@/components/customs/custom-dialog";
import { CreateCategoryForm } from "../components/create-category-form";
import { useNavigate } from "@/hooks/use-navigate";
import { BASE_ROUTE } from "@/constants/route";

export const CreateCategoryPage = () => {
  const { handleNavigate } = useNavigate();

  return (
    <CustomDialog
      open
      setOpen={() => handleNavigate(BASE_ROUTE.categories.base)}
      title="Thêm danh mục mới"
      description="Danh mục có thể được phân làm nhiều cấp dựa trên danh mục cha đã chọn."
    >
      <CreateCategoryForm />
    </CustomDialog>
  );
};
