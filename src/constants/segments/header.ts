import { Navigation } from "@/interfaces/segments/header.interface";

export const headerConstants: {
  navigations: Navigation[];
} = {
  navigations: [
    {
      key: "home",
      href: "/home",
      title: "Trang chủ",
    },
    {
      key: "services",
      href: "/services",
      title: "Dịch vụ",
    },
    {
      key: "aboutUs",
      href: "/about-us",
      title: "Về chúng tôi",
    },
    {
      key: "contact",
      href: "/contact",
      title: "Liên hệ",
    },
  ],
};
