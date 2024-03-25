import type { ClinicalEventsGetClinicalEventsResponseData } from "@/components/wg-generated/models";
import type { RootMessageInterface } from "./MessageTypesInterface";

type ClinicalEventMessagePayloadOperationType = "add" | "remove";

interface RootClinicalEventMessagePayload {
  operation: ClinicalEventMessagePayloadOperationType;
}

interface ClinicalEventUpdateMessagePayload
  extends RootClinicalEventMessagePayload {
  clinicalEvent: ClinicalEventsGetClinicalEventsResponseData["mainDb_clinicalEvents"][0];
}

type ClinicalEventMessagePayload = ClinicalEventUpdateMessagePayload;

export interface ClinicalEventMessageInterface extends RootMessageInterface {
  type: "clinicalEvent";
  payload: ClinicalEventMessagePayload;
}
