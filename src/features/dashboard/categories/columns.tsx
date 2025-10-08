import { ColumnDef } from "@tanstack/react-table";
import { TCategories } from "@/modules/category/types/queries";
import { TableAction } from "./table-action";
import Link from "next/link";
import { BASE_ROUTE } from "@/constants/route";
import { Switch } from "@/components/ui/switch";
import { FormatDateTime } from "@/utils/format";
import { handleToggleActiveCategory } from "./commands";

export const columns: ColumnDef<TCategories, TCategories>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Tên danh mục",
    cell: ({ row }) => {
      const id = row.original.id;
      const name = row.original.name;
      return (
        <Link
          className="block w-full"
          href={`${BASE_ROUTE.categories.view(id)}`}
        >
          {name}
        </Link>
      );
    },
  },
  {
    id: "slug",
    accessorKey: "slug",
    header: "Slug",
    cell: ({ row }) => {
      const id = row.original.id;
      const slug = row.original.slug;
      return (
        <Link
          className="block w-full"
          href={`${BASE_ROUTE.categories.view(id)}`}
        >
          {slug}
        </Link>
      );
    },
  },
  {
    id: "description",
    accessorKey: "description",
    header: "Mô tả",
    cell: ({ row }) => {
      const id = row.original.id;
      const description = row.original.description;
      return (
        <Link
          className="block w-full"
          href={`${BASE_ROUTE.categories.view(id)}`}
        >
          {description}
        </Link>
      );
    },
  },
  {
    id: "active",
    accessorKey: "active",
    header: "Trạng thái hiển thị",
    cell: ({ row }) => {
      const isActive = row.original.isActive;
      return (
        <Switch
          onCheckedChange={() => handleToggleActiveCategory(row.original.id)}
          checked={isActive}
        />
      );
    },
  },
  {
    accessorKey: "createdAt",
    id: "createdAt",
    header: "Thời gian tạo",
    cell: ({ row }) => {
      const createdAt = row.original.createdAt;
      const formatted = FormatDateTime({
        value: createdAt,
      });

      return formatted;
    },
  },
  {
    accessorKey: "updatedAt",
    id: "updatedAt",
    header: "Thời gian cập nhật",
    cell: ({ row }) => {
      const updatedAt = row.original.updatedAt;
      const formatted = FormatDateTime({
        value: updatedAt,
      });

      return formatted;
    },
  },
  {
    id: "actions",
    header: "Hành động",
    cell: TableAction,
  },
];
