import { TypographyProps } from "@/types/default-props";

export function TypographyH1({ title }: TypographyProps) {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {title}
    </h1>
  );
}
