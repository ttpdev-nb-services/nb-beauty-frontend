import { TypographyProps } from "@/types/default-props";

export function TypographyH4({ title }: TypographyProps) {
  return (
    <h4 className="scroll-m-20 text-xl font-medium tracking-tight">{title}</h4>
  );
}
