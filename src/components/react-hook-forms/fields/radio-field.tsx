import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { OptionProps, StyleableProps } from "@/types/default-props";
import { FieldProps } from "@/types/react-hook-form";
import { cn } from "@/utils/cn";
import { useFormContext } from "react-hook-form";

type RadioFieldProps = {
  orientation?: "horizontal" | "vertical" | undefined;
} & FieldProps &
  OptionProps &
  StyleableProps;
export const RadioField = ({
  name,
  options,
  orientation,
  className,
}: RadioFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormControl>
            <RadioGroup
              orientation={orientation}
              value={field.value}
              onValueChange={(value) => field.onChange(value)}
            >
              <ul
                className={cn(
                  orientation === "horizontal" ? "flex-row" : "flex-col",
                  "flex gap-2",
                  className,
                )}
              >
                {options?.map((option) => (
                  <li
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem
                      className="cursor-pointer"
                      value={option.value}
                      id={option.value}
                    />
                    <Label
                      className="cursor-pointer w-max"
                      htmlFor={option.value}
                    >
                      {option.label}
                    </Label>
                  </li>
                ))}
              </ul>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
