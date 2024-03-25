"use client";
import type { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { AppDataTable } from "@/components/GeneralComponents/DataTable/AppDataTable";
import type { PatientsGetOnTrashPatientsResponseData } from "@/components/wg-generated/models";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function PatientSchedulingTableComponent<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({});
  const [, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    const selected = data.filter((_value, index) =>
      Object.keys(rowSelection).includes(index.toString())
    ) as PatientsGetOnTrashPatientsResponseData["mainDb_patients"];

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
