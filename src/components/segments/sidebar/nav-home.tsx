import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavHomeItem } from "@/types/segments/app-sidebar";
import Link from "next/link";

export const NavHome = ({ items }: { items: NavHomeItem[] }) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Home</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.url}>
            <Link
              className="text-sidebar-foreground/70 font-medium"
              href={item.url}
            >
              <SidebarMenuButton>
                {item.icon && <item.icon />}
                {item.title}
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};
