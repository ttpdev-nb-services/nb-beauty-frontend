import { useLocalStorage } from "./use-localstorage";
import { OnChangeFn, VisibilityState } from "@tanstack/react-table";

export function useDataTable(tableId: string) {
  const [columnVisibility, setColumnVisibility] = useLocalStorage<
    Record<string, VisibilityState>
  >("data-table-visibility", {});

  const handleVisibilityChange: OnChangeFn<VisibilityState> = (
    updaterOrValue,
  ) => {
    setColumnVisibility((prevTableId) => {
      // find column by tableId
      const oldVisibility = prevTableId[tableId] ?? {};

      // update column visible based-tableId.
      const newVisibility =
        typeof updaterOrValue === "function"
          ? (updaterOrValue as (old: VisibilityState) => VisibilityState)(
              oldVisibility,
            )
          : updaterOrValue;

      return {
        ...prevTableId,
        [tableId]: newVisibility,
      };
    });
  };

  return {
    handleVisibilityChange,
    columnVisibility,
  };
}
