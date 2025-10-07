import { socials } from "@/constants/constants";
import { Icon } from "./icon";
import Link from "next/link";

export const Social = () => {
  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <Link
          target="_blank"
          href={social.href}
          className="bg-slate-800/80 h-10 w-10 rounded-full flex items-center justify-center"
          key={social.key}
        >
          <Icon className="h-5 w-5 text-neutral-300" icon={social.icon} />
        </Link>
      ))}
    </div>
  );
};
