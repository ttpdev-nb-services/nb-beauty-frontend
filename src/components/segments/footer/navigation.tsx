import { Icon } from "@/components/icon";
import { LinkAction } from "@/components/link-action";
import { footerConstant } from "@/constants/segments/footer";

export const Navigation = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 xl:gap-11 w-full">
      {footerConstant.navigation.map((nav) => (
        <div key={nav.key}>
          <div className="flex items-center gap-2.5 mb-4">
            <Icon icon={nav.icon} className="h-5 w-5 text-label" />
            <h4 className="text-sm text-label">{nav.title}</h4>
          </div>
          <div className="flex flex-col gap-1.5">
            {nav.items.map((item) => (
              <LinkAction
                target="_self"
                className="text-zinc-400 text-sm hover:text-label"
                href={item.href}
                key={item.key}
              >
                {item.title}
              </LinkAction>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
