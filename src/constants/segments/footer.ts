import {
  IFNavigation,
  Information,
} from "@/interfaces/segments/footer.interface";

export const footerConstant: {
  navigation: IFNavigation[];
  informations: Information[];
} = {
  navigation: [
    {
      key: "aboutUs",
      title: "Về chúng tôi",
      icon: "icon-[lucide--users-round]",
      items: [
        {
          key: "serviceTerms",
          href: "/service-terms",
          title: "Điều khoản dịch vụ",
        },
        {
          key: "privacyPolicy",
          href: "/privacy-policy",
          title: "Chính sách bảo mật",
        },
      ],
    },
    {
      key: "services",
      title: "Dịch vụ",
      icon: "icon-[lucide--hand-heart]",
      items: [
        {
          key: "skincare",
          href: "/services/skincares",
          title: "Chăm sóc da mặt",
        },
        {
          key: "washHairAndMassage",
          href: "/services/wash-hair-and-massages",
          title: "Gội đầu, mát xa",
        },
      ],
    },
    {
      key: "contact",
      title: "Liên hệ",
      icon: "icon-[lucide--phone]",
      items: [
        {
          key: "serviceConsulting",
          href: "/contact/service-consulting",
          title: "Tư vấn dịch vụ",
        },
      ],
    },
    {
      key: "explores",
      title: "Khám phá",
      icon: "icon-[lucide--navigation]",
      items: [
        {
          key: "home",
          href: "/",
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
        {
          key: "blog",
          href: "/blog",
          title: "Blog",
        },
      ],
    },
  ],
  informations: [
    {
      key: "address",
      title: "Hà nội",
      content: "Số 54, Ngõ Vân tảo, Quận Hồng Vân, TP. Hà Nội",
      icon: "icon-[lucide--map-pin]",
      href: "https://maps.app.goo.gl/hNMeh9nHJbFfK2R27",
    },
    {
      key: "email",
      href: "mailto:nbbeauty@gmail.com?subject=Đặt lịch tư vấn&body=Tôi muốn đặt lịch tư vấn dịch vụ spa.",
      title: "Địa chỉ E-mail",
      content: "nbbeauty@gmail.com",
      icon: "icon-[lucide--mail]",
    },
    {
      key: "phone",
      href: "tel:+84393150468",
      title: "Số điện thoại",
      content: "03982145184",
      icon: "icon-[lucide--phone]",
    },
  ],
};
