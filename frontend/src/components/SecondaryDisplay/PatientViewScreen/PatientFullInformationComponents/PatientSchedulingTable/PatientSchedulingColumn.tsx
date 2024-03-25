/* eslint-disable react/no-unescaped-entities */
"use client";
import type { ColumnDef } from "@tanstack/react-table";
import type { SpreedPatientSchedulingType } from "./PatientSchedulingType";
import { differenceInDays, differenceInMonths } from "date-fns";

export const PatientSchedulingColumn: ColumnDef<SpreedPatientSchedulingType>[] =
  [
    {
      id: "select",
      enableColumnFilter: false,
      header: () => (
        <div className="flex items-center gap-2">
          <div>Date de consultation</div>
        </div>
      ),
      cell: ({ row }) => {
        const parsedDate = row.original.date.split("-");
        const now = new Date();
        const date = new Date(
          parseInt(parsedDate[2], 10),
          parseInt(parsedDate[1], 10) - 1,
          parseInt(parsedDate[0], 10)
        );

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
              {row.original.date} ({delai})
            </div>
          </div>
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "clinicalExam",
      header: () => (
        <div className="flex items-center gap-2">Nº d'Examen clinique</div>
      ),
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2">
            <div>
              {row.original.events.CLINICALEXAM
                ? row.original.events.CLINICALEXAM.length
                : 0}
            </div>
          </div>
        );
      },
    },
    {
      id: "ECG",
      header: () => <div className="flex items-center gap-2">Nº d'ECG</div>,
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2">
            <div>
              {row.original.events.ECG ? row.original.events.ECG.length : 0}
            </div>
          </div>
        );
      },
    },
    {
      id: "ETT",
      header: () => <div className="flex items-center gap-2">Nº d'ETT</div>,
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2">
            <div>
              {row.original.events.SONOGRAPHY
                ? row.original.events.SONOGRAPHY.length
                : 0}
            </div>
          </div>
        );
      },
    },
    {
      id: "Documents",
      header: () => (
        <div className="flex items-center gap-2">Nº de Documents</div>
      ),
      cell: ({ row }) => {
        const examCount =
          (row.original.events.PRESCRIPTION
            ? row.original.events.PRESCRIPTION.length
            : 0) +
          (row.original.events.CERTIFICAT
            ? row.original.events.CERTIFICAT.length
            : 0);
        return (
          <div className="flex items-center gap-2">
            <div>{examCount}</div>
          </div>
        );
      },
    },
    /* {
      accessorKey: "actions",
      enableColumnFilter: false,
      enableHiding: false,
      cell: ({ row }) => {
        return <div></div>;
      },
    }, */
  ];

export default PatientSchedulingColumn;
