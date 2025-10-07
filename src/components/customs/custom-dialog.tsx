import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChildrenProps, StyleableProps } from "@/types/default-props";
import { TCustomDialogProps } from "@/types/dialog";
import { cn } from "@/utils/cn";
import { Spinner } from "../ui/spinner";

type CustomDialogProps = {
  showTrigger?: boolean;
  renderTrigger?: React.ReactNode;
  loading?: boolean;
} & ChildrenProps &
  StyleableProps &
  TCustomDialogProps;

export const CustomDialog = ({
  children,
  renderTrigger,
  showTrigger,
  open,
  setOpen,
  icon: Icon,
  title,
  className,
  loading,
  description,
}: CustomDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {showTrigger && <DialogTrigger>{renderTrigger}</DialogTrigger>}
      <DialogContent
        onWheelCapture={(e) => {
          e.stopPropagation();
        }}
        className={cn(className)}
      >
        <DialogHeader hidden={loading}>
          <DialogTitle className="flex items-center gap-2" hidden={!title}>
            {Icon}
            {title}
          </DialogTitle>
          <DialogDescription hidden={!description}>
            {description}
          </DialogDescription>
        </DialogHeader>
        {loading ? (
          <div className="flex items-center justify-center w-full min-h-72">
            <Spinner className="size-6 text-destructive" />
          </div>
        ) : (
          children
        )}
      </DialogContent>
    </Dialog>
  );
};
