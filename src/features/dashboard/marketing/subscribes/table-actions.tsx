import { RowActionGroup } from "@/components/data-table/row-action/row-action-group";
import { TSubscribeDto } from "@/modules/subscribe/types/queries";
import { TActionTableProps } from "@/types/data-table/data-table";
import { ActionItem } from "@/types/data-table/row-action-group";
import { Trash2 } from "lucide-react";
import { subscribeCommands } from "./commands";

export const TableActions = ({ row }: TActionTableProps<TSubscribeDto>) => {
  const id = row.original.id;
  const { mutate } = subscribeCommands.useCancelSubscripting();

  const handleCancelSubscripting = () => {
    mutate(id);
  };

  const items: ActionItem[] = [
    {
      key: 1,
      label: "Huỷ đăng ký",
      icon: Trash2,
      onClick: () => handleCancelSubscripting(),
      className: "text-destructive",
    },
  ];

  return <RowActionGroup items={items} />;
};
