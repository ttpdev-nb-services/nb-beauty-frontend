import { TypographyProps } from "@/types/default-props";

export function TypographyBlockquote({ title }: TypographyProps) {
  return <blockquote className="mt-6 pl-6 italic">{title}</blockquote>;
}
