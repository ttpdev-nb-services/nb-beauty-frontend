import { usePathname } from "next/navigation";

export function useActiveParams(href: string) {
  const pathname = usePathname();

  const isActive =
    pathname === href ||
    (pathname.startsWith(href) && href !== "/" && href !== "/dashboard");
  return { isActive };
}
