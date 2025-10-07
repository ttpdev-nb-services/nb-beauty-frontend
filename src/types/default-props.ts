import { ReactNode } from "react";

export type ChildrenProps = {
  children?: ReactNode;
};

export type StyleableProps = {
  className?: string;
};

export type TypographyProps = {
  title: string | undefined;
};

export type OptionItem = {
  value: string;
  label: string;
};

export type OptionProps = {
  options: OptionItem[] | undefined;
};

export type PageParamsProps<TData> = {
  params: Promise<TData>;
};
