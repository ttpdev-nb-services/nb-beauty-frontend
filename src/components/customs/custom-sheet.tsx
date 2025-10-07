import { ChildrenProps, StyleableProps } from "@/types/default-props";
import { TCustomDialogProps } from "@/types/dialog";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { cn } from "@/utils/cn";

type CustomSheetProps = {
  showTrigger?: boolean;
  renderTrigger: React.ReactNode;
} & ChildrenProps &
  StyleableProps &
  TCustomDialogProps;

export const CustomSheet = ({
  children,
  renderTrigger,
  showTrigger,
  open,
  setOpen,
  title,
  className,
  description,
}: CustomSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {showTrigger && <SheetTrigger>{renderTrigger}</SheetTrigger>}
      <SheetContent
        onWheelCapture={(e) => {
          e.stopPropagation();
        }}
        className={cn(className)}
      >
        <SheetHeader>
          <SheetTitle hidden={!title}>{title}</SheetTitle>
          <SheetDescription hidden={!description}>
            {description}
          </SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};
