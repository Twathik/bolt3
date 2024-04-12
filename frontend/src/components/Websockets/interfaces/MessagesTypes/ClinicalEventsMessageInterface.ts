import type { RootMessageInterface } from "../MessageTypesInterface";

type ClinicalEventMessagePayloadOperationType = "add" | "remove";

interface RootClinicalEventMessagePayload {
  operation: ClinicalEventMessagePayloadOperationType;
}

interface ClinicalEventUpdateMessagePayload
  extends RootClinicalEventMessagePayload {
  clinicalEvent: {
    id: string;
    eventType:
      | "BIOLOGY"
      | "CERTIFICAT"
      | "CLINICALEXAM"
      | "DIAGNOSTIC"
      | "ECG"
      | "HISTORY"
      | "MEDICAL_REPORT"
      | "PRESCRIPTION"
      | "SONOGRAPHY";
    eventCategory: "DOCUMENT" | "FOLDER";
    updatedAt: string;
    createdAt: string;
    dicomId?: string;
    dicom: boolean;
    deleted: boolean;
    user: {
      id: string;
      fullName?: string;
    };
    patientId: string;
  };
}

type ClinicalEventMessagePayload = ClinicalEventUpdateMessagePayload;

export interface ClinicalEventMessageInterface extends RootMessageInterface {
  type: "clinicalEvent";
  payload: ClinicalEventMessagePayload;
}
