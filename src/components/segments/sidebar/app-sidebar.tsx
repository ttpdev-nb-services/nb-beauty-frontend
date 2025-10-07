"use client";

import * as React from "react";

import { NavMain } from "@/components/segments/sidebar/nav-main";
import { NavUser } from "@/components/segments/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { sidebarItems } from "@/constants/segments/app-sidebar";
import { NavSecondary } from "./nav-secondary";
import { NavHome } from "./nav-home";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="bg-secondary" collapsible="offcanvas" {...props}>
      <SidebarHeader>{/* <TeamSwitcher teams={data.teams} /> */}</SidebarHeader>
      <SidebarContent>
        <NavHome items={sidebarItems.navHome} />
        <NavMain items={sidebarItems.navMain} />
        <NavSecondary items={sidebarItems.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarItems.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
