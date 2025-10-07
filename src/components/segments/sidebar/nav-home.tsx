import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavHomeItem } from "@/types/segments/app-sidebar";
import { NavLink } from "./nav-link";

export const NavHome = ({ items }: { items: NavHomeItem[] }) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Home</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.url}>
            <NavLink icon={item.icon} title={item.title} href={item.url} />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};
