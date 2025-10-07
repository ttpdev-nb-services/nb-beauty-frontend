"use client";

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { NavMainItem } from "@/types/segments/app-sidebar";
import { NavLink } from "./nav-link";

export function NavMain({ items }: { items: NavMainItem[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isDefaultOpen}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  disabled={!item.isAvailable}
                  className="flex items-center font-medium text-sidebar-foreground/70 justify-between"
                  tooltip={item.title}
                >
                  {item.icon && <item.icon size={16} />}
                  <span>{item.title}</span>
                  {!item.isAvailable && (
                    <Badge className="ml-auto" variant={"default"}>
                      Sắp ra mắt
                    </Badge>
                  )}
                  <ChevronRight
                    size={16}
                    className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                  />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => {
                    return (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <NavLink href={subItem.url} title={subItem.title} />
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    );
                  })}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
