"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { TDataTableProps } from "@/types/data-table/data-table";
import { PackageOpen } from "lucide-react";
import { DataTableViewOptions } from "./data-table-view-options";
import { DataTablePagination } from "./data-table-pagination";
import { DataTableFilter } from "./data-table-filter";
import { useDataTable } from "@/hooks/use-data-table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

export const DataTable = <TData, TValue>({
  columns,
  data,
  tableId,
  enableRowSelection,
  onRowSelectionChange,
  rowSelection = {},
  showFilters,
  showViewOptions,
  onPaginationChange,
  pagination = {
    pageIndex: 0,
    pageSize: 10,
  },
}: TDataTableProps<TData, TValue>) => {
  const { handleVisibilityChange, columnVisibility } = useDataTable(tableId);

  const table = useReactTable({
    columns,
    data,
    defaultColumn: {
      size: 200,
    },
    state: {
      pagination,
      rowSelection,
      columnVisibility: columnVisibility[tableId] ?? {},
    },

    enableRowSelection,
    onPaginationChange,
    onRowSelectionChange,
    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: handleVisibilityChange,
  });

  return (
    <div className="mt-4 max-w-full">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showFilters && <DataTableFilter table={table} />}
          {table.getIsAllRowsSelected() && (
            <div className="text-muted-foreground flex-1 text-sm">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
          )}
        </div>
        {showViewOptions && <DataTableViewOptions table={table} />}
      </div>
      <div className="!max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="bg-secondary">
            {table.getHeaderGroups().map((header) => (
              <TableRow className="border-none" key={header.id}>
                {header.headers.map((head) => (
                  <TableHead
                    className="py-3 pl-4 text-center text-neutral-600"
                    key={head.id}
                  >
                    {flexRender(
                      head.column.columnDef.header,
                      head.getContext(),
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      title={String(cell.getValue())}
                      className="text-neutral-800 text-center py-3.5 pl-4 border-b "
                      style={{
                        width: cell.column.getSize(),
                        whiteSpace: "nowrap",
                        maxWidth: 550,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-36 place-items-center text-muted-foreground place-content-center text-center"
                >
                  <PackageOpen className="mb-1" />
                  Không có dữ liệu
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
};
