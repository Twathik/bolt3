import TrashTableComponent from "./TrashTableComponent";
import TrashColumn from "./TrashColumn";
import type { PatientsGetOnTrashPatientsResponseData } from "@/components/wg-generated/models";

function TrashTable({
  onTrash,
}: {
  onTrash: PatientsGetOnTrashPatientsResponseData["mainDb_patients"];
}) {
  return <TrashTableComponent columns={TrashColumn} data={onTrash} />;
}

export default TrashTable;
