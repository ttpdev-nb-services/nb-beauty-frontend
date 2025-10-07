import { Icon } from "./icon";
import { StyleableProps } from "@/types/default-props";
import { cn } from "@/utils/cn";

type LoadingProps = {
  text?: string;
} & StyleableProps;

export const Loading = ({ className, text }: LoadingProps) => {
  return (
    <div className={cn(className, "flex items-center gap-2")}>
      <Icon
        icon="icon-[lucide--loader-circle]"
        className="animate-spin text-muted-foreground"
      />
      <span className="text-muted-foreground">{text ? text : "Đang tải"}</span>
    </div>
  );
};
