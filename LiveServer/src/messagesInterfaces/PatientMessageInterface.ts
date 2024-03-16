import type { PatientsGetOnePatientInfoResponseData } from "../../wg-generated/models";
import type { RootMessageInterface } from "./MessageTypesInterface";

type PatientMessagePayloadOperationType =
  | "update"
  | "onTrash"
  | "delete"
  | "update-clinicalData"
  | "update-documentData";

interface RootPatientMessagePayload {
  operation: PatientMessagePayloadOperationType;
}

interface PatientUpdateMessagePayload extends RootPatientMessagePayload {
  operation: "update";
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
}

interface PatientDeleteMessagePayload extends RootPatientMessagePayload {
  operation: "onTrash" | "delete";
  patientId: string;
}

interface PatientUpdateDocumentPayload extends RootPatientMessagePayload {
  operation: "update-clinicalData" | "update-documentData";
  content: string;
}

type PatientMessagePayload =
  | PatientUpdateMessagePayload
  | PatientDeleteMessagePayload
  | PatientUpdateDocumentPayload;

export interface PatientMessageInterface extends RootMessageInterface {
  type: "patient";
  payload: PatientMessagePayload;
}
