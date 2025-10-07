import React from "react";
import { Input } from "../ui/input";
import { StyleableProps } from "@/types/default-props";
import { cn } from "@/utils/cn";
import { X } from "lucide-react";
type CustomInputProps = {
  allowClear?: boolean;
  clearColor?: string;
} & StyleableProps &
  React.ComponentProps<"input">;

export const CustomInput = ({
  className,
  allowClear = true,
  clearColor,
  ...props
}: CustomInputProps) => {
  return (
    <div className="relative">
      <Input id="input" className={cn(className, "pr-8")} {...props} />
      {allowClear && props.value && (
        <X
          onClick={() => {
            const event = {
              target: { value: "" },
            } as React.ChangeEvent<HTMLInputElement>;
            props.onChange?.(event);
          }}
          className={cn(
            "cursor-pointer text-muted-foreground absolute right-3 top-1/2 -translate-y-1/2",
            clearColor,
          )}
          size={16}
        />
      )}
    </div>
  );
};
