import { LucideIcon } from "lucide-react";

export type NavMainItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isDefaultOpen?: boolean;
  isAvailable?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

export type NavSecondaryItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isAvailable?: boolean;
};

export type NavHomeItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
};

export type NavUser = {
  name: string;
  email: string;
  avatar: string;
};

export type SidebarItem = {
  navHome: NavHomeItem[];
  navMain: NavMainItem[];
  user: NavUser;
  navSecondary: NavSecondaryItem[];
};
