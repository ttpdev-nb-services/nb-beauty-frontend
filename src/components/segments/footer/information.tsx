import { Icon } from "@/components/icon";
import { LinkAction } from "@/components/link-action";
import { footerConstant } from "@/constants/segments/footer";

export const Information = () => {
  return (
    <div className="grid lg:grid-cols-3 max-sm:gap-5 grid-cols-1 gap-7 xl:gap-14">
      {footerConstant.informations.map((infor) => (
        <div className="flex items-center" key={infor.key}>
          <LinkAction href={infor.href}>
            <div className="w-11 mr-4 flex items-center justify-center h-11 rounded-full bg-slate-800/80">
              <Icon className="w-5 h-5 text-label" icon={infor.icon} />
            </div>
          </LinkAction>
          <div className="flex flex-col">
            <h4 className="text-sm text-label">{infor.title}</h4>
            <span className="text-sm text-zinc-400">{infor.content}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
