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
import { Checkbox } from "../ui/checkbox";
import { Fragment } from "react";

export const DataTable = <TData, TValue>({
  columns,
  data,
  tableId,
  enableRowSelection,
  onRowSelectionChange,
  rowSelection = {},
  showFilters,
  showViewOptions,
}: TDataTableProps<TData, TValue>) => {
  const { handleVisibilityChange, columnVisibility } = useDataTable(tableId);

  const table = useReactTable({
    columns,
    data,
    defaultColumn: {
      size: 200,
    },
    state: {
      rowSelection,
      columnVisibility: columnVisibility[tableId] ?? {},
    },
    enableRowSelection,
    onRowSelectionChange,
    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: handleVisibilityChange,
  });

  return (
    <div className="mt-4">
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
      <div className="overflow-x-auto rounded-md">
        <Table>
          <TableHeader className="bg-secondary">
            {table.getHeaderGroups().map((header) => (
              <TableRow className="rounded-lg border-none" key={header.id}>
                {enableRowSelection && (
                  <TableHead className="pl-4">
                    <Checkbox
                      checked={table.getIsAllPageRowsSelected()}
                      onCheckedChange={(checked) => {
                        table.toggleAllPageRowsSelected(checked as boolean);
                      }}
                    />
                  </TableHead>
                )}
                {header.headers.map((head) => (
                  <TableHead
                    className="py-3 pr-4 text-neutral-600"
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
                <Fragment key={row.id}>
                  <TableRow data-state={row.getIsSelected() && "selected"}>
                    {enableRowSelection && (
                      <TableCell className="pl-4 border-b">
                        <Checkbox
                          checked={row.getIsSelected()}
                          onCheckedChange={row.getToggleSelectedHandler()}
                        />
                      </TableCell>
                    )}
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        className="text-neutral-800 py-3.5 pr-4 border-b "
                        style={{
                          minWidth: cell.column.getSize(),
                          textWrap: "nowrap",
                          maxWidth: "550px",
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
                </Fragment>
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
