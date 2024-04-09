import type { PlateEditor } from "@udecode/plate-core";
import withDrugMentionOperationOverride from "./DrugMentionOperationOverride";
import type { WebsocketConnectionType } from "@/stores/boltStoreType";
import withPreventHeadersModifications from "./deletionProtect";
import withPrescriptionListNumberOverride from "./prescriptionListNumber";

export const WithEditorRootAppOverrides = ({
  editor,
  socket,
  patientId,
}: {
  editor: PlateEditor;
  socket: WebsocketConnectionType | null;
  patientId: string;
}): PlateEditor =>
  withPreventHeadersModifications(
    withPrescriptionListNumberOverride(
      withDrugMentionOperationOverride(editor, socket, patientId)
    )
  );
