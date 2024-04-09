"use client";
import type { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { AppDataTable } from "@/components/GeneralComponents/DataTable/AppDataTable";
import type { WorkingListsWorkingListsResponseData } from "@/components/wg-generated/models";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function DicomTableComponent<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({});
  const [, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    const selected = data.filter((_value, index) =>
      Object.keys(rowSelection).includes(index.toString())
    ) as WorkingListsWorkingListsResponseData["mainDb_workingLists"];

    setSelectedIds(selected.map((s) => s.id));
  }, [data, rowSelection, setSelectedIds]);

  return (
    <>
      <AppDataTable
        columns={columns}
        data={data}
        setSelectedIds={setSelectedIds}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        showPagination={false}
      />
    </>
  );
}
