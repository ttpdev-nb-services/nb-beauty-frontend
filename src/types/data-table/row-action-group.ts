import { LucideIcon } from "lucide-react";

export type ActionItem = {
  key: string | number;
  onClick?: () => void;
  link?: string;
  label: string;
  icon?: LucideIcon;
  className?: string;
};

export type TRowActionGroupProps = {
  items: ActionItem[];
};
