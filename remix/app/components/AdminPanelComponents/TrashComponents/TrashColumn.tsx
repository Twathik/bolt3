import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/ui/components/ui/checkbox";
import type { PatientsGetOnTrashPatientsResponseData } from "@/components/generated/models";
import ToggleTrashElements from "./ToggleTrashElements";

export const TrashColumn: ColumnDef<
  PatientsGetOnTrashPatientsResponseData["mainDb_patients"][0]
>[] = [
  {
    id: "select",
    enableColumnFilter: false,
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "patientFullName",
    header: "Nom et prénom",
    enableColumnFilter: true,
  },
  {
    accessorKey: "sexe",
    header: "Sexe",
    enableColumnFilter: true,
  },
  {
    accessorKey: "supression_date",
    header: "Date de derniere modification",
    enableColumnFilter: false,
  },
  {
    accessorKey: "actions",
    enableColumnFilter: false,
    enableHiding: false,
    cell: ({ row }) => {
      const onTrash = row.original;
      return <ToggleTrashElements patientId={onTrash.id} />;
    },
  },
];

export default TrashColumn;
