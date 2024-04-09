import type { PatientsGetOnePatientInfoResponseData } from "../../../wg-generated/models";
import type { RootMessageInterface } from "../MessageTypesInterface";

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
  operation: "update" | "delete";
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
}
interface PatientTrashManagementMessagePayload
  extends RootPatientMessagePayload {
  operation: "onTrash";
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
  trashOperation: "addToTrash" | "restore";
}

interface PatientUpdateDocumentPayload extends RootPatientMessagePayload {
  operation: "update-clinicalData" | "update-documentData";
  content: string;
}

type PatientMessagePayload =
  | PatientUpdateMessagePayload
  | PatientUpdateDocumentPayload
  | PatientTrashManagementMessagePayload;

export interface PatientMessageInterface extends RootMessageInterface {
  type: "patient";
  payload: PatientMessagePayload;
}
