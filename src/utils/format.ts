import { FormatDateTimeProps } from "@/types/utils";
import { format } from "date-fns";

export function FormatDateTime(props: FormatDateTimeProps) {
  const formatted = format(
    props.value,
    props.prefix ?? "HH:mm dd/MM/yyyy",
    props.options,
  );

  return formatted;
}
