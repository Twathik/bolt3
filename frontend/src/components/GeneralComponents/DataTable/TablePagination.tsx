import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Table } from "@tanstack/react-table";

function TablePagination<TData>({ table }: { table: Table<TData> }) {
  return (
    <div className="flex flex-row justify-end items-center gap-2">
      <Button
        className="border rounded p-1"
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}>
        {"<<"}
      </Button>
      <Button
        className="border rounded p-1"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}>
        {"<"}
      </Button>
      <Button
        className="border rounded p-1"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}>
        {">"}
      </Button>
      <Button
        className="border rounded p-1"
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}>
        {">>"}
      </Button>
      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </strong>
      </span>
      <span className="flex items-center gap-1">
        | Allez à la page:
        <Input
          type="number"
          min={0}
          max={table.getPageCount()}
          defaultValue={(table.getState().pagination.pageIndex + 1).toString()}
          onChange={(e) => {
            if (Number(e.target.value) > table.getPageCount())
              e.target.value = table.getPageCount().toString();
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            table.setPageIndex(page);
          }}
          className="border p-1 rounded w-16"
        />
      </span>
      <Select
        value={table.getState().pagination.pageSize.toString()}
        onValueChange={(value) => {
          table.setPageSize(Number(value));
        }}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Nombre d'elements par page" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>
              {table.getState().pagination.pageSize.toString()} par page
            </SelectLabel>
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={pageSize.toString()}>
                Afficher {pageSize}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default TablePagination;
