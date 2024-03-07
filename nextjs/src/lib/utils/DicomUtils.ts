import type { mainDb_EventTypesValues } from "@/components/wg-generated/models";
import type { FocusedDocumentType } from "@/stores/boltStoreType";

const DicomDocuments: mainDb_EventTypesValues[] = ["SONOGRAPHY"];

const isDicomAvailable = (
  focusedDocument: FocusedDocumentType | null
): boolean =>
  focusedDocument
    ? DicomDocuments.includes(focusedDocument.d.documentType)
    : false;

export default isDicomAvailable;
