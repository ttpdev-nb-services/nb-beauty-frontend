export interface IFNavigation {
  key: string | number;
  title: string;
  icon: string;
  items: {
    key: string | number;
    title: string;
    href: string;
  }[];
}

export interface Information {
  key: string;
  title: string;
  content: string;
  icon: string;
  href: string;
}
