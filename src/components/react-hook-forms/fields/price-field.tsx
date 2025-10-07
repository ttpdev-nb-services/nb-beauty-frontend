import { CustomInput } from "@/components/customs/custom-input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { REPLACE_REGEX } from "@/constants/regex";
import { StyleableProps } from "@/types/default-props";
import { FieldProps } from "@/types/react-hook-form";
import { cn } from "@/utils/cn";
import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";

type PriceFieldProps = {} & StyleableProps & FieldProps;

export const PriceField = ({
  required,
  className,
  name,
  label,
}: PriceFieldProps) => {
  const { control } = useFormContext();
  const { format } = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const handleChange = (
    field: ControllerRenderProps<FieldValues, string>,
    value: string,
  ) => {
    const rawValue = value.replace(REPLACE_REGEX.price, "");

    field.onChange(rawValue);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const initValue = field.value;
        const convertToPriceFormat = initValue
          ? format(Number(initValue))
          : format(0);

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
              <CustomInput
                allowClear={false}
                type="text"
                id={name}
                className={cn(className)}
                value={convertToPriceFormat ?? undefined}
                onChange={(e) => handleChange(field, e.target.value)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
