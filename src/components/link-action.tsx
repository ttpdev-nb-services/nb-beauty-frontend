import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

interface LinkActionProps {
  target?: string;
  href: string;
  className?: string;
  title?: string;
  children?: React.ReactNode;
}

export const LinkAction = ({
  href,
  target = "_blank",
  className,
  children,
  title,
}: LinkActionProps) => {
  return (
    <Link
      target={target}
      href={href}
      className={cn(className, "hover:underline")}
    >
      {title ? title : children}
    </Link>
  );
};
