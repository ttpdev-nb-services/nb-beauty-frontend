import { ColumnDef, Row, RowSelectionState } from "@tanstack/react-table";

export type TDataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  tableId: string;
  enableRowSelection?: boolean;
  rowSelection?: RowSelectionState;
  showFilters?: boolean;
  showViewOptions?: boolean;
  onRowSelectionChange?: React.Dispatch<
    React.SetStateAction<RowSelectionState>
  >;
};

export type TActionTableProps<TData> = {
  row: Row<TData>;
};
