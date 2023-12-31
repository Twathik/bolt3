import { DataTable } from "./TrashTableComponent";
import TrashColumn from "./TrashColumn";
import type { PatientsGetOnTrashPatientsResponseData } from "@/components/generated/models";

function TrashTable({
  onTrash,
}: {
  onTrash: PatientsGetOnTrashPatientsResponseData["mainDb_patients"];
}) {
  return <DataTable columns={TrashColumn} data={onTrash} />;
}

export default TrashTable;
