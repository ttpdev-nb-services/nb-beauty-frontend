import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { StyleableProps } from "@/types/default-props";
import { FieldProps } from "@/types/react-hook-form";
import { cn } from "@/utils/cn";
import { useFormContext } from "react-hook-form";

type CheckboxFieldProps = {} & FieldProps & StyleableProps;

export const CheckboxField = ({
  label,
  name,
  className,
}: CheckboxFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormControl>
            <div
              aria-orientation="horizontal"
              className={cn("flex items-center gap-2", className)}
            >
              <Checkbox
                className="cursor-pointer"
                checked={field.value}
                onCheckedChange={(value) => field.onChange(value)}
                id={name}
              />
              <Label className="cursor-pointer w-max" htmlFor={name}>
                {label}
              </Label>
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
