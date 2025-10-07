import { AppSidebar } from "@/components/segments/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/providers/query-provider";
import { ChildrenProps } from "@/types/default-props";
import React from "react";

export const DashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 68)",
          "--header-height": "calc(var(--spacing) * 16)",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <QueryProvider>
          <Toaster position="top-right" />
          {children}
        </QueryProvider>
      </SidebarInset>
    </SidebarProvider>
  );
};
