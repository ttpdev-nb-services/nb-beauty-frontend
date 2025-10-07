import { Badge } from "@/components/ui/badge";
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
import { OptionItem, OptionProps, StyleableProps } from "@/types/default-props";
import { FieldProps } from "@/types/react-hook-form";
import { cn } from "@/utils/cn";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { debounce } from "lodash";
type MultiSelectFieldProps = {
  placeholder?: string;
  type?: "string" | "number";
  searchPlaceholder?: string;
  onSearch?: (value: string) => Promise<OptionItem[]>;
} & StyleableProps &
  OptionProps &
  FieldProps;

export const MultiSelectField = ({
  options,
  searchPlaceholder,
  className,
  required,
  onSearch,
  type,
  name,
  label,
  placeholder,
}: MultiSelectFieldProps) => {
  const { control } = useFormContext();

  const [search, setSearch] = useState("");
  const handleChange = (
    field: ControllerRenderProps<FieldValues, string>,
    currentValue: OptionItem[],
    newValue: OptionItem,
  ) => {
    const exist = currentValue?.some((v) => v.value === newValue.value);
    let updated: OptionItem[];
    if (exist) {
      updated = currentValue!.filter((v) => v.value !== newValue.value);
    } else {
      updated = [...(currentValue ?? []), newValue];
    }

    field.onChange(updated);
  };

  const onSearchCallback = useCallback(
    async (value: string) => {
      const result = await onSearch?.(value);
      console.log("Get value: ", result);
    },
    [onSearch],
  );

  const debounceSearch = useMemo(
    () =>
      debounce(async (value: string) => {
        if (type === "string") {
          const shouldSearch = options?.some((o) =>
            o.value.toLowerCase().includes(value.trim().toLowerCase()),
          );

          if (!shouldSearch) {
            onSearchCallback(value);
          }
        }
      }, 300),
    [options, onSearchCallback, type],
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value.trim()) {
      debounceSearch(value);
    }
  };

  useEffect(() => {
    return () => {
      debounceSearch.cancel();
    };
  }, [debounceSearch]);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const initValue: OptionItem[] = field.value ?? [];

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
                  <PopoverTrigger className="border w-full text-sm font-medium rounded-md flex items-center justify-between h-9 px-3 py-2 gap-2 [&_svg:not([class*='size-'])]:size-4">
                    <div className="w-full rounded-none border-none shadow-none flex items-center cursor-pointer justify-start gap-0">
                      <div>
                        {Array.isArray(initValue || []) &&
                        initValue.length > 0 ? (
                          <div className="space-x-1.5">
                            {initValue.slice(0, 3).map((v: OptionItem) => (
                              <Badge key={v.value} variant={"outline"}>
                                {v.label}
                              </Badge>
                            ))}
                            {initValue.length - 3 > 0 && (
                              <span
                                onClick={(e) => {
                                  e.stopPropagation();
                                  console.log("Visible other options");
                                }}
                                className="text-xs text-blue-600"
                              >
                                +{initValue.length - 3}
                              </span>
                            )}
                          </div>
                        ) : (
                          placeholder
                        )}
                      </div>
                    </div>
                    {initValue.length > 0 ? (
                      <X
                        onClick={(e) => {
                          e.stopPropagation();
                          field.onChange([]);
                        }}
                        className="text-destructive cursor-pointer"
                        size={14}
                      />
                    ) : (
                      <ChevronsUpDown className="opacity-50" />
                    )}
                  </PopoverTrigger>
                  <PopoverContent className="w-[var(--radix-popover-trigger-width)] min-w-full p-1">
                    <Command>
                      <CommandInput
                        value={search}
                        onValueChange={(value) => handleSearch(value)}
                        placeholder={searchPlaceholder}
                        className="h-9"
                      />
                      <CommandList>
                        <CommandEmpty>Không có dữ liệu</CommandEmpty>
                        <CommandGroup>
                          {options?.map((option) => {
                            const isSelected =
                              Array.isArray(initValue ?? []) &&
                              initValue.some(
                                (v: OptionItem) => v.value === option.value,
                              );

                            return (
                              <CommandItem
                                key={option.value}
                                value={option.value}
                                onSelect={() => {
                                  handleChange(field, initValue, option);
                                }}
                              >
                                {option.label}
                                <Check
                                  className={cn(
                                    "ml-auto",
                                    isSelected ? "opacity-100" : "opacity-0",
                                  )}
                                />
                              </CommandItem>
                            );
                          })}
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
