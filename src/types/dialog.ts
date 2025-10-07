import { ReactNode } from "react";

export type TCustomDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  description?: string;
  children?: ReactNode;
  icon?: React.ReactNode;
};
