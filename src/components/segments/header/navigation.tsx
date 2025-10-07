import { headerConstants } from "@/constants/segments/header";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="flex items-center">
      {headerConstants.navigations.map((nav) => (
        <Link
          href={nav.href}
          title={nav.title}
          key={nav.key}
          className="px-4 hover:underline"
        >
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};
