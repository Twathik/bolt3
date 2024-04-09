"use client";
import PatientSchedulingTableComponent from "./DicomTableComponent";
import PatientSchedulingColumn from "./DicomTableColumn";
import { useBoltStore } from "@/stores/boltStore";

function DiacomTable() {
  const workingLists = useBoltStore((s) => s.workingLists);

  return (
    <PatientSchedulingTableComponent
      columns={PatientSchedulingColumn}
      data={workingLists}
    />
  );
}

export default DiacomTable;
