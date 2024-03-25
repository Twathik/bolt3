import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ColumnDef } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect } from "react";
import FilterData from "./FilterData";
import { Checkbox } from "@/components/ui/checkbox";
import TablePagination from "./TablePagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  setSelectedIds: (value: React.SetStateAction<string[]>) => void;
  setRowSelection: React.Dispatch<React.SetStateAction<{}>>;
  rowSelection: {};
  showPagination?: boolean;
}

export function AppDataTable<TData, TValue>({
  columns,
  data,
  setSelectedIds,
  setRowSelection,
  rowSelection,
  showPagination = true,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: { rowSelection },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // debugTable: true,
  });

  useEffect(() => {
    table.resetRowSelection();
  }, [data, table]);
  useEffect(() => {
    const selected = data.filter((_value, index) =>
      Object.keys(rowSelection).includes(index.toString())
    );

    setSelectedIds(selected.map((s: any) => s.id));
  }, [data, rowSelection, setSelectedIds]);

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : (
                        <div className="flex flex-row gap-2 items-center py-4">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {header.column.getCanFilter() ? (
                            <div className="">
                              <FilterData
                                column={header.column}
                                table={table}
                              />
                            </div>
                          ) : null}
                        </div>
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Aucun Résultat
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter className="bg-white text-black">
            <TableRow>
              <TableCell>
                <Checkbox
                  checked={table.getIsAllPageRowsSelected()}
                  onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                  }
                  aria-label="Select all"
                />
              </TableCell>
              <TableCell>
                Elements de la page ({table.getRowModel().rows.length})
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <div className="h-4" />
      {showPagination && <TablePagination table={table} />}
    </>
  );
}
