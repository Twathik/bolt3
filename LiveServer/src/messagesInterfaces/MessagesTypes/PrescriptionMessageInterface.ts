import type { prescriptionHit } from "@/lib/typesense/searchPrescription";
import type { RootMessageInterface } from "../MessageTypesInterface";

type PrescriptionMessagePayloadOperationType = "add" | "remove";

interface RootPrescriptionMessagePayload {
  operation: PrescriptionMessagePayloadOperationType;
}

interface PrescriptionUpdateMessagePayload
  extends RootPrescriptionMessagePayload {
  prescription: prescriptionHit;
}

type PrescriptionMessagePayload = PrescriptionUpdateMessagePayload;

export interface PrescriptionMessageInterface extends RootMessageInterface {
  type: "prescription";
  payload: PrescriptionMessagePayload;
}
