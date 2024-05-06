import type { RootMessageInterface } from "../MessageTypesInterface";
import type { FocusedClinicalEvent } from "@/stores/boltStoreType";

type FocusedClinicalEventMessagePayloadOperationType = "update";

interface RootFocusedClinicalEventMessagePayload {
  operation: FocusedClinicalEventMessagePayloadOperationType;
}

interface FocusedClinicalEventUpdateMessagePayload
  extends RootFocusedClinicalEventMessagePayload {
  focusedClinicalEvent: FocusedClinicalEvent;
  patient: {
    id: string;
    firstName: string;
    lastName: string;
    sexe: "F" | "M";
    ddn: string;
    deleted: boolean;
    onTrash: boolean;
    patientFullName: string;
    informationsConfirmed: boolean;
    nTel?: string;
    weight?: number;
    height?: number;
    address?: string;
    updated: string;
  };
}

type FocusedClinicalEventMessagePayload =
  FocusedClinicalEventUpdateMessagePayload;

export interface FocusedClinicalEventMessageInterface
  extends RootMessageInterface {
  type: "focused-clinical-event";
  payload: FocusedClinicalEventMessagePayload;
}
