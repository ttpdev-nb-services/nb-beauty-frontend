"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TCategories } from "@/modules/category/types/queries";
import { TableAction } from "./table-action";
import Link from "next/link";
import { BASE_ROUTE } from "@/constants/route";
import { Switch } from "@/components/ui/switch";

export const Columns: ColumnDef<TCategories, TCategories>[] = [
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
    id: "isActive",
    accessorKey: "isActive",
    header: "Trạng thái hiển thị",
    cell: ({ row }) => {
      const isActive = row.original.isActive;

      return <Switch checked={isActive} />;
    },
  },
  {
    id: "actions",
    header: "Hành động",
    cell: TableAction,
  },
];
