"use client";

import { CustomDialog } from "@/components/customs/custom-dialog";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { BASE_ROUTE } from "@/constants/route";
import { useNavigate } from "@/hooks/use-navigate";
import { CircleAlert } from "lucide-react";
import { categoryCommands } from "../commands";
import { Spinner } from "@/components/ui/spinner";

type DeleteCategoryPageProps = {
  id: number;
};

export const DeleteCategoryPage = ({ id }: DeleteCategoryPageProps) => {
  const { handleNavigate } = useNavigate();

  const { mutate, isPending } = categoryCommands.useDeleteCategory(id);

  const handleDeleteCategory = () => {
    mutate(undefined, {
      onSuccess: () => {
        handleNavigate(BASE_ROUTE.categories.base);
      },
    });
  };

  return (
    <CustomDialog
      open
      setOpen={() => handleNavigate(BASE_ROUTE.categories.base)}
      title="Xoá danh mục"
      icon={<CircleAlert className="text-destructive" />}
      description="Danh mục sẽ được xoá hoàn toàn khỏi hệ thống, hãy cân nhắc trước khi xoá."
    >
      <DialogFooter className="gap-4">
        <DialogClose asChild>
          <Button variant={"outline"}>Huỷ</Button>
        </DialogClose>
        <Button disabled={isPending} onClick={handleDeleteCategory}>
          {isPending ? (
            <div className="flex items-center gap-2">
              <Spinner />
              Đang xử lý
            </div>
          ) : (
            "Xác nhận"
          )}
        </Button>
      </DialogFooter>
    </CustomDialog>
  );
};
