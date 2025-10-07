import { TypographyProps } from "@/types/default-props";

export function TypographyH3({ title }: TypographyProps) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {title}
    </h3>
  );
}
