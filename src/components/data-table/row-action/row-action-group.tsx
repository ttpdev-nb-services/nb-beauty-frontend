import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TRowActionGroupProps } from "@/types/data-table/row-action-group";
import { cn } from "@/utils/cn";
import { Ellipsis } from "lucide-react";
import Link from "next/link";

export function RowActionGroup({ items }: TRowActionGroupProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size={"icon"}
          variant={"outline"}
          className="border-none shadow-none bg-transparent"
        >
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {items.map((item) => (
          <DropdownMenuItem className="p-0" key={item.key}>
            {item.link ? (
              <Link
                className={cn(
                  "flex items-center w-full gap-2 px-2 py-1.5",
                  item.className,
                )}
                href={item.link}
              >
                {item.icon && <item.icon className="text-current" />}
                {item.label}
              </Link>
            ) : (
              <div
                className={cn(
                  item.className,
                  "flex items-center gap-2 px-2 py-1.5",
                )}
              >
                {item.icon && <item.icon size={16} />}
                {item.label}
              </div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
