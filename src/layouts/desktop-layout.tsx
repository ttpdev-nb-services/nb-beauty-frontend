import { cn } from "@/utils/cn";
import React from "react";

type DesktopLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

export const DesktopLayout = ({ children, className }: DesktopLayoutProps) => {
  return (
    <div className={cn("max-w-8xl mx-auto w-full", className)}>{children}</div>
  );
};
