"use client";

import { DataTable } from "@/components/data-table/data-table";
import { PageContainer } from "@/layouts/containers/page-container";
import { columns } from "../columns";
import { useQuery } from "@tanstack/react-query";
import { subscribeQueries } from "../queries";
import { placeholderData } from "@/constants/react-query";

export const ListSubscribesPage = () => {
  const { data } = useQuery({
    ...subscribeQueries.list(),
  });

  return (
    <PageContainer title="Đăng ký nhận tin">
      <DataTable
        columns={columns}
        data={data?.results ?? placeholderData}
        tableId="marketing-subscribes"
      />
    </PageContainer>
  );
};
