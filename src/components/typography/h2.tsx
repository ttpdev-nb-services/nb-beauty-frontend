import { TypographyProps } from "@/types/default-props";

export function TypographyH2({ title }: TypographyProps) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {title}
    </h2>
  );
}
