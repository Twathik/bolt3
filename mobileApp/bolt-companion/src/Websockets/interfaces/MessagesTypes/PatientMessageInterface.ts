import type {
  PatientInfoInterface,
  RootMessageInterface,
} from "../MessageTypesInterface";

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
  patient: PatientInfoInterface;
}
interface PatientTrashManagementMessagePayload
  extends RootPatientMessagePayload {
  operation: "onTrash";
  patient: PatientInfoInterface;
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
