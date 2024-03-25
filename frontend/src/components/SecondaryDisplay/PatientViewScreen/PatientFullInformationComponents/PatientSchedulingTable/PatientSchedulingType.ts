import type {
  ClinicalEventsGetClinicalEventsResponseData,
  mainDb_EventTypesValues,
} from "@/components/wg-generated/models";

export type AllowedSchedulingTypes =
  | "BIOLOGY"
  | "CERTIFICAT"
  | "CLINICALEXAM"
  | "ECG"
  | "PRESCRIPTION"
  | "SONOGRAPHY";

export const allowedScheduling: AllowedSchedulingTypes[] = [
  "BIOLOGY",
  "CERTIFICAT",
  "CLINICALEXAM",
  "ECG",
  "PRESCRIPTION",
  "SONOGRAPHY",
];

export type SpreedPatientSchedulingType = {
  date: string;
  events: {
    [key in mainDb_EventTypesValues]?: ClinicalEventsGetClinicalEventsResponseData["mainDb_clinicalEvents"];
  };
};

export type PatientSchedulingType = {
  [key: string]: {
    [key in mainDb_EventTypesValues]?: ClinicalEventsGetClinicalEventsResponseData["mainDb_clinicalEvents"];
  };
};
