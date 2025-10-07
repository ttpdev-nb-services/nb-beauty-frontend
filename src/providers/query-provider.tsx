"use client";

import queryClient from "@/configs/react-query.config";
import { ChildrenProps } from "@/types/default-props";

import { QueryClientProvider } from "@tanstack/react-query";

export const QueryProvider = ({ children }: ChildrenProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
