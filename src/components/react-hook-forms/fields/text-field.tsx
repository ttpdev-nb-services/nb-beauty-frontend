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

type InputFieldProps = {
  placeholder?: string;
} & StyleableProps &
  FieldProps;

export const TextField = ({
  className,
  placeholder,
  name,
  required,
  label,
}: InputFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          {label && (
            <Label
              htmlFor={name}
              className="mb-1 cursor-pointer text-current w-max"
            >
              {label}
              {required && (
                <sup className="text-destructive font-medium text-sm">*</sup>
              )}
            </Label>
          )}
          <FormControl>
            <CustomInput
              type="text"
              placeholder={placeholder}
              id={name}
              className={cn(className)}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              allowClear
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
