"use client";

import { DataTable } from "@/components/data-table/data-table";
import { Columns } from "../columns";
import { useQuery } from "@tanstack/react-query";
import { categoryQueries } from "../queries";
import { placeholderData } from "@/constants/react-query";
import { PageContainer } from "@/layouts/containers/page-container";
import { HeaderAction } from "../components/header-actions";
import { useState } from "react";
import { RowSelectionState } from "@tanstack/react-table";

export const ListCategoriesPage = () => {
  const { data: categories } = useQuery({
    ...categoryQueries.listCategories(),
  });

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  return (
    <PageContainer actions={<HeaderAction />} title="Danh mục">
      <DataTable
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
        enableRowSelection
        tableId="categories"
        columns={Columns}
        showFilters
        showViewOptions
        data={categories?.results || placeholderData}
      />
    </PageContainer>
  );
};
