import type { mainDb_EventTypesValues } from "@/components/wg-generated/models";
import type { FocusedClinicalEvent } from "@/stores/boltStoreType";

const DicomDocuments: mainDb_EventTypesValues[] = ["SONOGRAPHY"];

const isDicomAvailable = (
  focusedClinicalEvent: FocusedClinicalEvent | null
): boolean =>
  focusedClinicalEvent
    ? DicomDocuments.includes(focusedClinicalEvent.eventType)
    : false;

export default isDicomAvailable;
