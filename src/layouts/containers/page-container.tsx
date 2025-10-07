import { SiteHeader } from "@/components/segments/sidebar/site-header";
import { ChildrenProps } from "@/types/default-props";
import React from "react";

type PageContainerProps = {
  title?: string;
  actions?: React.ReactNode;
} & ChildrenProps;

export const PageContainer = ({
  actions,
  children,
  title,
}: PageContainerProps) => {
  return (
    <div>
      <SiteHeader actions={actions} title={title} />
      <main className="p-2 h-screen">{children}</main>
    </div>
  );
};
