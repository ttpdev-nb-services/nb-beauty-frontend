import { TActionTableProps } from "@/types/data-table/data-table";
import { TCategories } from "../../../modules/category/types/queries";
import { RowActionGroup } from "@/components/data-table/row-action/row-action-group";
import { ActionItem } from "@/types/data-table/row-action-group";
import { Edit, Trash2 } from "lucide-react";

export const TableAction = ({ row }: TActionTableProps<TCategories>) => {
  const id = row.original.id;

  const items: ActionItem[] = [
    {
      key: 2,
      label: "Cập nhật",
      icon: Edit,
      link: `/dashboard/categories/${id}/edit`,
      className: "text-yellow-600",
    },
    {
      key: 3,
      label: "Xoá",
      icon: Trash2,
      link: `/dashboard/categories/${id}/delete`,
      className: "text-destructive",
    },
  ];

  return <RowActionGroup items={items} />;
};
