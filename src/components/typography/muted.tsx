import { TypographyProps } from "@/types/default-props";

export function TypographyMuted({ title }: TypographyProps) {
  return <p className="text-muted-foreground text-sm">{title}</p>;
}
