import { TSubscribeDto } from "@/modules/subscribe/types/queries";
import { ColumnDef } from "@tanstack/react-table";
import { TableActions } from "./table-actions";
import { FormatDateTime } from "@/utils/format";

export const columns: ColumnDef<TSubscribeDto, TSubscribeDto>[] = [
  {
    accessorKey: "email",
    id: "email",
    header: "Người dùng",
  },
  {
    accessorKey: "createdAt",
    id: "createdAt",
    header: "Thời gian đăng ký",
    cell: ({ row }) => {
      const createdAt = row.original.createdAt;
      const formatted = FormatDateTime({
        value: createdAt,
      });

      return formatted;
    },
  },
  {
    id: "actions",
    header: "Hành động",
    cell: TableActions,
  },
];
