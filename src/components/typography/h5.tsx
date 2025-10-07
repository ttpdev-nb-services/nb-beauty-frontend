import { TypographyProps } from "@/types/default-props";

export function TypographyH5({ title }: TypographyProps) {
  return (
    <h5 className="scroll-m-20 text-lg font-semibold tracking-tight">
      {title}
    </h5>
  );
}
