import { DesktopLayout } from "@/layouts/desktop-layout";
import { ChildrenProps } from "@/types/default-props";

export default function AuthLayout({ children }: ChildrenProps) {
  return <DesktopLayout>{children}</DesktopLayout>;
}
