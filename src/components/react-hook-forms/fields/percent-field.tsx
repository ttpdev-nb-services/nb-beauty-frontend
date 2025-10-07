import { CustomInput } from "@/components/customs/custom-input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { StyleableProps } from "@/types/default-props";
import { FieldProps } from "@/types/react-hook-form";
import { cn } from "@/utils/cn";
import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";

type PercentFieldProps = {} & StyleableProps & FieldProps;

export const PercentField = ({
  required,
  className,
  name,
  label,
}: PercentFieldProps) => {
  const { control } = useFormContext();

  const handleChange = (
    field: ControllerRenderProps<FieldValues, string>,
    value: string,
  ) => {
    const { format } = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    const rawValue = value.replace(/[^\d-]/g, "");
    const priceFormatted = format(Number(rawValue));

    field.onChange(priceFormatted);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
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
              value={field.value ?? undefined}
              onChange={(e) => handleChange(field, e.target.value)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
