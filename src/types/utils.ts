import { FormatOptions } from "date-fns";

export type FormatDateTimeProps = {
  value: Date | string;
  prefix?: string;
  options?: FormatOptions;
};
