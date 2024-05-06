import type { RootMessageInterface } from "../MessageTypesInterface";

type PatientScannedDocumentMessagePayloadOperationType = "add" | "remove";

interface RootPatientScannedDocumentMessagePayload {
  operation: PatientScannedDocumentMessagePayloadOperationType;
}

interface PatientScannedDocumentUpdateMessagePayload
  extends RootPatientScannedDocumentMessagePayload {
  patientScannedDocument: {
    id: string;
    documentCollectionDate: string;
    documentCollectionName: string;
    documentCollectionUrls: string[];
    patientId: string;
  };
}

type PatientScannedDocumentMessagePayload =
  PatientScannedDocumentUpdateMessagePayload;

export interface PatientScannedDocumentMessageInterface
  extends RootMessageInterface {
  type: "patientScannedDocument";
  payload: PatientScannedDocumentMessagePayload;
}
