import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { StyleableProps } from "@/types/default-props";
import { FieldProps } from "@/types/react-hook-form";
import { cn } from "@/utils/cn";
import { useFormContext } from "react-hook-form";

type SwitchFieldProps = {} & FieldProps & StyleableProps;

export const SwitchField = ({ label, name, className }: SwitchFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormControl>
            <div
              aria-orientation="vertical"
              className={cn("flex flex-col gap-2", className)}
            >
              <Label className="cursor-pointer w-max" htmlFor={name}>
                {label}
              </Label>
              <Switch
                className="cursor-pointer"
                checked={field.value}
                onCheckedChange={(value) => field.onChange(value)}
                id={name}
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
