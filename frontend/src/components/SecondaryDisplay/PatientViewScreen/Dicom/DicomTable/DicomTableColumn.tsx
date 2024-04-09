/* eslint-disable react/no-unescaped-entities */
"use client";
import type { ColumnDef } from "@tanstack/react-table";
import {
  differenceInDays,
  differenceInMonths,
  format,
  parseISO,
} from "date-fns";
import type { WorkingListsWorkingListsResponseData } from "@/components/wg-generated/models";
import DisplaySecondary from "@/components/GeneralComponents/DICOMcomponents/DisplaySecondary";

export const DicomTableColumn: ColumnDef<
  WorkingListsWorkingListsResponseData["mainDb_workingLists"][0]
>[] = [
  {
    id: "select",
    enableColumnFilter: false,
    header: () => (
      <div className="flex items-center gap-2">
        <div>Date de creation</div>
      </div>
    ),
    cell: ({ row }) => {
      const now = new Date();
      const date = parseISO(row.original.createdAt);
      const delaiMois = differenceInMonths(now, date);
      const delaiJour = differenceInDays(now, date);

      const delai =
        delaiMois > 0
          ? `depuis ${delaiMois} mois`
          : delaiJour > 0
          ? `depuis ${delaiJour} jours`
          : "Aujourd'hui";
      return (
        <div className="flex items-center gap-2">
          <div>
            {format(date, "dd-MM-yyy")} ({delai})
          </div>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "ExamType",
    header: () => <div className="flex items-center gap-2">Type d'examen</div>,
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <div>{row.original.clinicalEvent.eventType}</div>
        </div>
      );
    },
  },
  {
    id: "status",
    header: () => <div className="flex items-center gap-2">Nº d'ECG</div>,
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <div>{row.original.modalityExamStatus}</div>
        </div>
      );
    },
  },

  {
    accessorKey: "actions",
    enableColumnFilter: false,
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div>
          <DisplaySecondary workingList={row.original} />
        </div>
      );
    },
  },
];

export default DicomTableColumn;
