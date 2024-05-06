import { AxiosInstance } from "axios";

import {
  SendJsonMessage,
  SendMessage,
  WebSocketLike,
} from "react-use-websocket/dist/lib/types";
import { ReadyState } from "react-use-websocket";
import { appUser } from "../types/appUserInterface";
import { PatientScannedDocumentsGetPatientScannedDocumentsResponseData } from "@/generated/models";

export type SpinnerStoreSlice = {
  appSpinnerLoading: boolean;
  setAppSpinnerLoading: (loading: boolean) => void;
};

export type ThemeStoreSlice = {
  isDarkTheme: boolean;
  isSecretaryTheme: boolean;
  setDarkTheme: (darkTheme: boolean) => void;
  setIsSecretaryTheme: (secretary: boolean) => void;
};

export type wundergraphStoreSlice = {
  uuid: string | null;
  authToken: string;
  user: appUser | null;
  appAxios: AxiosInstance;
  setUuid: (uuid: string) => void;
  setAuthToken: (authToken: string) => void;
  setUser: (user: appUser | null) => void;
};

export type WebsocketConnectionType = {
  getWebSocket: () => WebSocketLike | null;
  lastJsonMessage: unknown;
  readyState: ReadyState;
  sendJsonMessage: SendJsonMessage;
  sendMessage: SendMessage;
};

export type WebsocketConnectionSlice = {
  socket: WebsocketConnectionType | null;
  setSocket: (socket: WebsocketConnectionType | null) => void;
};

export type ConsultationPatient = {
  lastName: string;
  firstName: string;
  ddn: string;
  sexe: "M" | "F";
  id: string;
};

export type ConsultationPatientSlice = {
  consultationPatients: ConsultationPatient[];
  setConsultationPatients: (patients: ConsultationPatient[]) => void;
  addConsultationPatient: (patient: ConsultationPatient) => void;
  updateConsultationPatient: (patient: ConsultationPatient) => void;
  removeConsultationPatient: (patient: ConsultationPatient) => void;
};

export type PatientScannedDocumentSlice = {
  patientScannedDocuments: PatientScannedDocumentsGetPatientScannedDocumentsResponseData["mainDb_patientScannedDocuments"];
  setPatientScannedDocuments: (
    docs: PatientScannedDocumentsGetPatientScannedDocumentsResponseData["mainDb_patientScannedDocuments"]
  ) => void;
  addPatientScannedDocument: (
    doc: PatientScannedDocumentsGetPatientScannedDocumentsResponseData["mainDb_patientScannedDocuments"][0]
  ) => void;
  removePatientScannedDocument: (id: string) => void;
};

export type MobileBoltStoreType = SpinnerStoreSlice &
  ThemeStoreSlice &
  wundergraphStoreSlice &
  WebsocketConnectionSlice &
  ConsultationPatientSlice &
  PatientScannedDocumentSlice;
