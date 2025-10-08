import {
  ColumnDef,
  PaginationState,
  Row,
  RowSelectionState,
} from "@tanstack/react-table";

export type TDataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  tableId: string;
  enableRowSelection?: boolean;
  rowSelection?: RowSelectionState;
  showFilters?: boolean;
  showViewOptions?: boolean;
  pagination: PaginationState;
  onPaginationChange: React.Dispatch<React.SetStateAction<PaginationState>>;
  onRowSelectionChange?: React.Dispatch<
    React.SetStateAction<RowSelectionState>
  >;
};

export type TActionTableProps<TData> = {
  row: Row<TData>;
};
