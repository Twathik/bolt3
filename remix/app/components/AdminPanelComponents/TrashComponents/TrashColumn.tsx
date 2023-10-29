import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/ui/components/ui/checkbox";
import { BarsArrowDownIcon } from "@heroicons/react/24/outline";
import { Button } from "@/ui/components/ui/button";
import type { PatientsGetOnTrashPatientsResponseData } from "@/components/generated/models";
import DeleteDefinitivelyElementButton from "./DeleteDefinitivelyElementButton";

export const TrashColumn: ColumnDef<
  PatientsGetOnTrashPatientsResponseData["mainDb_patients"][0]
>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "patientFullName",

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            alert("ok");
            return column.toggleSorting(column.getIsSorted() === "asc");
          }}>
          Nom et prénom
          <BarsArrowDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "sexe",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Sexe
          <BarsArrowDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "supression_date",
    header: "Date de derniere modification",
  },
  {
    accessorKey: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const onTrash = row.original;
      return <DeleteDefinitivelyElementButton patientId={onTrash.id} />;
    },
  },
];

export default TrashColumn;
