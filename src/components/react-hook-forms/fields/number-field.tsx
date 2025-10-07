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
import { useFormContext } from "react-hook-form";

type NumberFieldProps = {} & StyleableProps & FieldProps;

export const NumberField = ({
  required,
  className,
  name,
  label,
}: NumberFieldProps) => {
  const { control } = useFormContext();

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
              type="number"
              id={name}
              className={cn(className)}
              value={field.value}
              onChange={(e) => {
                const value = e.target.value;

                field.onChange(value ? Number(value) : undefined);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
