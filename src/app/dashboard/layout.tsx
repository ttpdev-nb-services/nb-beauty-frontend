import { DashboardLayout } from "@/layouts/dashboard-layout";
import "@/styles/globals.css";

import { ChildrenProps } from "@/types/default-props";

export default function layout({ children }: ChildrenProps) {
  return (
    <html>
      <body>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
