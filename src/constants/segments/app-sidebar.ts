import { SidebarItem } from "@/types/segments/app-sidebar";
import {
  Boxes,
  CircleGauge,
  Gift,
  HandHeart,
  HelpCircle,
  Search,
  Settings,
  Store,
  Tag,
} from "lucide-react";

// This is sample data.
export const sidebarItems: SidebarItem = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  // teams: [
  //   {
  //     name: "Acme Inc",
  //     logo: GalleryVerticalEnd,
  //     plan: "Enterprise",
  //   },
  //   {
  //     name: "Acme Corp.",
  //     logo: AudioWaveform,
  //     plan: "Startup",
  //   },
  //   {
  //     name: "Evil Corp.",
  //     logo: Command,
  //     plan: "Free",
  //   },
  // ],
  navHome: [
    {
      title: "Trang chủ",
      url: "/dashboard",
      icon: CircleGauge,
    },
  ],
  navMain: [
    {
      title: "Danh mục",
      url: "#",
      icon: Tag,
      isDefaultOpen: true,
      isAvailable: true,
      items: [
        {
          title: "Danh mục",
          url: "/dashboard/categories",
        },
        {
          title: "Thương hiệu",
          url: "/dashboard/brands",
        },
      ],
    },
    {
      title: "Dịch vụ",
      url: "/dashboard/services",
      icon: HandHeart,
      isDefaultOpen: false,
      isAvailable: false,
      items: [
        {
          title: "Dịch vụ SPA",
          url: "/dashboard/services",
        },
      ],
    },
    {
      title: "Sản phẩm",
      url: "/dashboard/products",
      icon: Store,
      isDefaultOpen: false,
      isAvailable: false,
      items: [
        {
          title: "Sản phẩm",
          url: "/dashboard/products",
        },
      ],
    },
    {
      title: "Kho",
      url: "/dashboard/inventories",
      icon: Boxes,
      isDefaultOpen: false,
      isAvailable: false,
      items: [],
    },
    {
      title: "Tin tức & Ưu đãi",
      url: "#",
      icon: Gift,
      isDefaultOpen: true,
      isAvailable: true,
      items: [
        {
          title: "Đăng ký nhận tin",
          url: "/dashboard/marketing/subscribes",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Cài đặt",
      url: "/dashboard/settings",
      icon: Settings,
    },
    {
      title: "Giúp & Hỗ trợ",
      url: "/dashboard/help-support",
      icon: HelpCircle,
    },
    {
      title: "Tìm kiếm",
      url: "/dashboard/#",
      icon: Search,
    },
  ],
};
