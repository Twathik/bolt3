import React from "react";
import { DataTable } from "./TrashTableComponent";
import TrashColumn from "./TrashColumn";
import { PatientsGetOnTrashPatientsResponseData } from "@/components/wg-generated/models";

function TrashTable({
  onTrash,
}: {
  onTrash:
    | PatientsGetOnTrashPatientsResponseData["mainDb_patients"]
    | undefined;
}) {
  return onTrash ? (
    <DataTable columns={TrashColumn} data={onTrash} />
  ) : (
    <span>Erreur</span>
  );
}

export default TrashTable;
