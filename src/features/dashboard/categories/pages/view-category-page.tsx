"use client";

import { CustomDialog } from "@/components/customs/custom-dialog";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { BASE_ROUTE } from "@/constants/route";
import { useNavigate } from "@/hooks/use-navigate";
import { DialogClose } from "@radix-ui/react-dialog";
import { Info } from "lucide-react";
import { categoryQueries } from "../queries";
import { useQuery } from "@tanstack/react-query";
import { Label } from "@/components/ui/label";

type ViewCategoryPageProps = {
  id: number;
};

export const ViewCategoryPage = ({ id }: ViewCategoryPageProps) => {
  const { handleNavigate } = useNavigate();

  const { data } = useQuery({
    ...categoryQueries.getById(id),
  });

  return (
    <CustomDialog
      open
      setOpen={() => handleNavigate(BASE_ROUTE.categories.base)}
      title={data?.data.name ?? "Chi tiết danh mục"}
      icon={<Info className="text-blue-600" />}
      description={data?.data.description}
    >
      <div className="space-y-4">
        <div>
          <Label>Tên danh mục</Label>
          <span>{data?.data.name}</span>
        </div>
        <div>
          <Label>Slug</Label>
          <span>{data?.data.slug}</span>
        </div>
        <div>
          <Label>Mô tả</Label>
          <span>{data?.data.description}</span>
        </div>
        <div>
          <Label>Trạng thái hiển thị</Label>
          <span>{data?.data.isActive ? "Đang hoạt động" : "Tạm ẩn"}</span>
        </div>
      </div>
      <DialogFooter className="gap-4">
        <DialogClose asChild>
          <Button variant={"outline"}>Đóng</Button>
        </DialogClose>
      </DialogFooter>
    </CustomDialog>
  );
};
