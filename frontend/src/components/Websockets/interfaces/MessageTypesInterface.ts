export type MessageType =
  | "secondaryDisplay"
  | "patient"
  | "subscribe"
  | "welcome"
  | "emptyTrash"
  | "modality"
  | "mobileDevice"
  | "workingList"
  | "consultationList"
  | "subscribedUsers"
  | "clinicalEvent"
  | "focused-clinical-event"
  | "prescription"
  | "consultation-list";

export type MessageDestination =
  | "secondary-display"
  | "folder"
  | "document"
  | "mobileDevices"
  | "modality"
  | "trash"
  | "folder-copy"
  | "document-copy"
  | "patient-information"
  | "patient-Root"
  | "focused-clinical-event"
  | "clinicalEvent"
  | "patient-full-information"
  | "sd-prescription-widget"
  | "consultation-list";

export interface RootMessageInterface {
  id: string;
  type: MessageType;
  global: boolean;
  subscriptionIds: string[];
  destination: MessageDestination[];
}

export const notificationTopic = "bolt3notifications";

export interface PatientInfoInterface {
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
}

export interface WorkingList {
  id: string;
  modality: {
    id: string;
    modalityPseudo?: string;
    modalityType:
      | "AR"
      | "ASMT"
      | "AU"
      | "BDUS"
      | "BI"
      | "BMD"
      | "CR"
      | "CT"
      | "CTPROTOCOL"
      | "DG"
      | "DOC"
      | "DX"
      | "ECG"
      | "EPS"
      | "ES"
      | "FID"
      | "GM"
      | "HC"
      | "HD"
      | "IO"
      | "IOL"
      | "IVOCT"
      | "IVUS"
      | "KER"
      | "KO"
      | "LEN"
      | "LS"
      | "M3D"
      | "MG"
      | "MR"
      | "NM"
      | "OAM"
      | "OCT"
      | "OP"
      | "OPM"
      | "OPT"
      | "OPTBSV"
      | "OPTENF"
      | "OPV"
      | "OSS"
      | "OT"
      | "PLAN"
      | "PR"
      | "PT"
      | "PX"
      | "REG"
      | "RESP"
      | "RF"
      | "RG"
      | "RTDOSE"
      | "RTIMAGE"
      | "RTINTENT"
      | "RTPLAN"
      | "RTRAD"
      | "RTRECORD"
      | "RTSEGANN"
      | "RTSTRUCT"
      | "RWV"
      | "SEG"
      | "SM"
      | "SMR"
      | "SR"
      | "SRF"
      | "STAIN"
      | "TEXTUREMAP"
      | "TG"
      | "US"
      | "VA"
      | "XA"
      | "XC";
    modalityAETitle: string;
  };
  patient: {
    patientFullName: string;
  };
  user: {
    fullName?: string;
  };
  clinicalEvent: {
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
  };
  clinicalEventId: string;
  createdAt: string;
  modalityExamStatus:
    | "CLOSED"
    | "CREATED"
    | "INPROGRESS"
    | "REALIZED"
    | "REPORT_DONE";
  linkId?: string;
  linked: boolean;
  locked: boolean;
}
