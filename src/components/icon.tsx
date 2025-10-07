import { cn } from "@/utils/cn";
import { MouseEventHandler } from "react";

interface IIcon {
  icon: string;
  className?: string;
  onClick?: MouseEventHandler;
}

function Icon({ icon, className, onClick }: IIcon) {
  return (
    <span onClick={onClick} className={cn("iconify", icon, className)}></span>
  );
}

export { Icon };
