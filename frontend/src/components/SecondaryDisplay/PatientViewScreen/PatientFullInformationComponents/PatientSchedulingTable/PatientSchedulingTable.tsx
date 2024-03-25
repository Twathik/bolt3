"use client";
import PatientSchedulingTableComponent from "./PatientSchedulingTableComponent";
import PatientSchedulingColumn from "./PatientSchedulingColumn";
import { useMemo } from "react";
import { allowedScheduling } from "./PatientSchedulingType";
import type {
  SpreedPatientSchedulingType,
  PatientSchedulingType,
} from "./PatientSchedulingType";
import { format, parseISO } from "date-fns";
import { useBoltStore } from "@/stores/boltStore";

function PatientSchedulingTable() {
  const clinicalEvents = useBoltStore((s) => s.clinicalEvents);

  const schedules: SpreedPatientSchedulingType[] = useMemo(() => {
    const merged = clinicalEvents.reduce<PatientSchedulingType>(
      (schedule, clinicalEvent) => {
        // @ts-expect-error
        if (allowedScheduling.includes(clinicalEvent.eventType)) {
          const date = format(parseISO(clinicalEvent.createdAt), "dd-MM-yyyy");
          if (!schedule[date]) schedule[date] = {};
          if (!schedule[date][clinicalEvent.eventType])
            schedule[date][clinicalEvent.eventType] = [];
          schedule[date][clinicalEvent.eventType]?.push(clinicalEvent);
          return schedule;
        }
        return schedule;
      },
      {}
    );

    return Object.keys(merged)
      .map((k) => ({ date: k, events: merged[k] }))
      .sort((a, b) => {
        const parseDateA = a.date.split("-");
        const dateA = new Date(
          parseInt(parseDateA[2], 10),
          parseInt(parseDateA[1], 10) - 1,
          parseInt(parseDateA[0], 10)
        );

        const parseDateB = b.date.split("-");
        const dateB = new Date(
          parseInt(parseDateB[2], 10),
          parseInt(parseDateB[1], 10) - 1,
          parseInt(parseDateB[0], 10)
        );
        if (dateA > dateB) {
          return -1;
        } else if (dateA < dateB) {
          return 1;
        }
        return 0;
      });
  }, [clinicalEvents]);

  return (
    <PatientSchedulingTableComponent
      columns={PatientSchedulingColumn}
      data={schedules}
    />
  );
}

export default PatientSchedulingTable;
