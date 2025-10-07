import { TypographyProps } from "@/types/default-props";

export function TypographyP({ title }: TypographyProps) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{title}</p>;
}
