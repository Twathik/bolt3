import type { PatientsGetOnePatientInfoResponseData } from "@/components/wg-generated/models";
import type { RootMessageInterface } from "../MessageTypesInterface";
import type { FocusedClinicalEvent } from "@/stores/boltStoreType";

type FocusedClinicalEventMessagePayloadOperationType = "update";

interface RootFocusedClinicalEventMessagePayload {
  operation: FocusedClinicalEventMessagePayloadOperationType;
}

interface FocusedClinicalEventUpdateMessagePayload
  extends RootFocusedClinicalEventMessagePayload {
  focusedClinicalEvent: FocusedClinicalEvent;
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
}

type FocusedClinicalEventMessagePayload =
  FocusedClinicalEventUpdateMessagePayload;

export interface FocusedClinicalEventMessageInterface
  extends RootMessageInterface {
  type: "focused-clinical-event";
  payload: FocusedClinicalEventMessagePayload;
}
