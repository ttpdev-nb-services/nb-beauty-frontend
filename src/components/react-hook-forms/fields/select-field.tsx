import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { OptionProps, StyleableProps } from "@/types/default-props";
import { FieldProps } from "@/types/react-hook-form";
import { cn } from "@/utils/cn";
import { Check, ChevronsUpDown } from "lucide-react";
import { useFormContext } from "react-hook-form";

type SelectFieldProps = {
  placeholder?: string;
  type?: "string" | "number";
  searchPlaceholder?: string;
} & StyleableProps &
  OptionProps &
  FieldProps;

export const SelectField = ({
  options,
  searchPlaceholder,
  className,
  name,
  label,
  type,
  required,
  placeholder,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const optionSelected = options?.find(
          (option) => option.value === field.value,
        );

        return (
          <FormItem className="w-full">
            {label && (
              <Label htmlFor={name} className="mb-1 w-max text-current">
                {label}
                {required && (
                  <sup className="text-destructive font-medium text-sm">*</sup>
                )}
              </Label>
            )}
            <FormControl>
              <div className={cn(className, "relative w-full")}>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        optionSelected ? "" : "text-muted-foreground",
                      )}
                      variant={"outline"}
                    >
                      {field.value ? optionSelected?.label : placeholder}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[var(--radix-popover-trigger-width)] min-w-full p-1">
                    <Command>
                      <CommandInput
                        placeholder={searchPlaceholder}
                        className="h-9"
                      />
                      <CommandList>
                        <CommandEmpty>Không có dữ liệu</CommandEmpty>
                        <CommandGroup>
                          {options?.map((option) => (
                            <CommandItem
                              className="cursor-pointer"
                              key={option.value}
                              value={String(option.value)}
                              onSelect={(currentValue) => {
                                const newValue =
                                  type === "number"
                                    ? Number(currentValue)
                                    : String(currentValue);

                                field.onChange(
                                  newValue === field.value
                                    ? undefined
                                    : newValue,
                                );
                              }}
                            >
                              {option.label}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  field.value === option.value
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
