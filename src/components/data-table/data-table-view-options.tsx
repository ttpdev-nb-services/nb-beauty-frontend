"use client";

import { Table } from "@tanstack/react-table";
import { Settings2 } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";

export function DataTableViewOptions<TData>({
  table,
}: {
  table: Table<TData>;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 text-neutral-600">
          <Settings2 />
          <span className="max-sm:hidden">Hiển thị</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[150px] p-1.5">
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide(),
          )
          .map((column) => {
            return (
              <Button
                asChild
                key={column.id}
                variant={"ghost"}
                className="capitalize w-full text-neutral-700 justify-start gap-3 px-2"
              >
                <div>
                  <Checkbox
                    id={column.id}
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  />
                  <Label className="cursor-pointer" htmlFor={column.id}>
                    {column.id}
                  </Label>
                </div>
              </Button>
            );
          })}
      </PopoverContent>
    </Popover>
  );
}
