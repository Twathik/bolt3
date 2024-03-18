"use client";
import { useBoltStore } from "@/stores/boltStore";
import React, { useEffect } from "react";
import TrashTable from "./TrashTable";
import type { PatientsGetOnTrashPatientsResponseData } from "@/components/wg-generated/models";

function TrashTableRootComponent({
  onTrash,
}: {
  onTrash: PatientsGetOnTrashPatientsResponseData["mainDb_patients"];
}) {
  const setOnTrash = useBoltStore((s) => s.setOnTrashPatients);
  useEffect(() => {
    setOnTrash(onTrash);
  }, [onTrash, setOnTrash]);
  return <TrashTable />;
}

export default TrashTableRootComponent;
