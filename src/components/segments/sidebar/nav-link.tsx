import { useActiveParams } from "@/hooks/use-active-params";
import { cn } from "@/utils/cn";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type NavLinkProps = {
  title: string;
  href: string;
  icon?: LucideIcon;
};

export const NavLink = ({ href, title, icon: Icon }: NavLinkProps) => {
  const { isActive } = useActiveParams(href);

  return (
    <Link
      className={cn(
        "text-sidebar-foreground/70 font-medium text-sm w-full inline-flex items-center [&_svg:not([class*='size-'])]:size-4 gap-2 px-3 py-1.5",
        isActive ? "text-destructive bg-destructive/15 rounded-lg" : "",
      )}
      href={href}
    >
      {Icon && <Icon />}
      <span>{title}</span>
    </Link>
  );
};
