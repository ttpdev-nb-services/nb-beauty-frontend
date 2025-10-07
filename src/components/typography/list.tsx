import { ChildrenProps } from "@/types/default-props";

export function TypographyList({ children }: ChildrenProps) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}
