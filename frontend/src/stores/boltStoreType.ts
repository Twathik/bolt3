import type { SecondaryDisplayMessagePayload } from "@/components/Websockets/interfaces/SecondaryDisplayMessageInterface";
import type { subscribedUsers } from "@/components/Websockets/interfaces/SubscribedUsersMessageInterface";
import type { DocumentHeaderElementTypeWithId } from "@/components/plateEditor/plate-app/Documents/DocumentHeaderUtils";
import type {
  ClinicalEventsGetClinicalEventResponseData,
  ClinicalEventsGetClinicalEventsResponseData,
  ConsultationListTodayListsResponseData,
  DataTableGetDataTableConfigurationsResponseData,
  EconomizersEconomizersResponseData,
  MobileDevicesMobileDevicesQueryResponseData,
  ModalityGetSpecificModalitiesResponseData,
  ModalityModalitiesResponseData,
  PatientsGetOnTrashPatientsResponseData,
  PatientsGetOnePatientInfoResponseData,
  WorkingListsWorkingListsResponseData,
  mainDb_EventTypesValues,
} from "@/components/wg-generated/models";
import type { DrugHitInterface } from "@/lib/interfaces/DrugsInterfaces";
import type { Value } from "@udecode/plate-common";
import type { ReadyState } from "react-use-websocket";
import type {
  SendJsonMessage,
  SendMessage,
  WebSocketLike,
} from "react-use-websocket/dist/lib/types";

export type BoltUser = {
  userId: string;
  lastName: string;
  firstName: string;
  fullName: string;
  avatarUrl: string;
  searchApiKey: string;
  editorApiKey: string;
};

export type UserStoreSlice = {
  user: BoltUser | null;
  setUser: (user: BoltUser) => void;
};

type ConsultationStateType = {
  id: string | null;
  allowedEventTypes: mainDb_EventTypesValues[];
};
export type ConsultationStoreSlice = {
  consultationState: ConsultationStateType;
  setConsultationState: (consultation: ConsultationStateType) => void;
};

export type PatientStoreSlice = {
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"] | null;
  onTrash: PatientsGetOnTrashPatientsResponseData["mainDb_patients"];

  documentData: Value;

  setPatient: (
    patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"] | null
  ) => void;
  addPatientToTrash: (
    addToTrash: PatientsGetOnTrashPatientsResponseData["mainDb_patients"][0]
  ) => void;
  removePatientFromTrash: (
    removeFromTrash: PatientsGetOnTrashPatientsResponseData["mainDb_patients"][0]
  ) => void;
  setOnTrashPatients: (
    onTrash: PatientsGetOnTrashPatientsResponseData["mainDb_patients"]
  ) => void;

  setDocumentData: (documentVersion: Value) => void;
};

export type PrescriptionStoreSlice = {
  loadingPrescription: boolean;
  prescriptions: DrugHitInterface[];
  setInitialPrescriptions: (prescriptions: DrugHitInterface[]) => void;
  addPrescription: (prescription: DrugHitInterface) => void;
  removePrescription: (prescriptionId: string) => void;
  setLoadingPrescription: (loading: boolean) => void;
};

export type TabStoreSlice = {
  tabs: any[];
  closeTabs: () => void;
  addTab: (tab: any) => void;
};

export type ClinicalEventStoreSlice = {
  clinicalEvent:
    | null
    | ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"];
  clinicalEvents: ClinicalEventsGetClinicalEventsResponseData["mainDb_clinicalEvents"];
  modalities: ModalityGetSpecificModalitiesResponseData["mainDb_modalities"];
  workingLists: WorkingListsWorkingListsResponseData["mainDb_workingLists"];
  editorConfiguration: DataTableGetDataTableConfigurationsResponseData["mainDb_getDataTableConfiguration"];

  setClinicalEvent: (
    clinicalEvent: ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"]
  ) => void;
  setModalities: (
    modalities: ModalityGetSpecificModalitiesResponseData["mainDb_modalities"]
  ) => void;
  setWorkingLists: (
    workingLists: WorkingListsWorkingListsResponseData["mainDb_workingLists"]
  ) => void;
  addWorkingList: (
    workingLists: WorkingListsWorkingListsResponseData["mainDb_workingLists"][0]
  ) => void;
  updateWorkingList: (
    workingLists: WorkingListsWorkingListsResponseData["mainDb_workingLists"][0]
  ) => void;
  removeWorkingList: (
    workingLists: WorkingListsWorkingListsResponseData["mainDb_workingLists"][0]
  ) => void;
  setEditorConfiguration: (
    editorConfiguration: DataTableGetDataTableConfigurationsResponseData["mainDb_getDataTableConfiguration"]
  ) => void;
  setClinicalEvents: (
    clinicalEvents: ClinicalEventsGetClinicalEventsResponseData["mainDb_clinicalEvents"]
  ) => void;

  addClinicalEvent: (
    clinicalEvent: ClinicalEventsGetClinicalEventsResponseData["mainDb_clinicalEvents"][0]
  ) => void;
  updateClinicalEvent: (
    clinicalEvent: ClinicalEventsGetClinicalEventsResponseData["mainDb_clinicalEvents"][0]
  ) => void;
  removeClinicalEvent: (
    clinicalEvent: ClinicalEventsGetClinicalEventsResponseData["mainDb_clinicalEvents"][0]
  ) => void;
};

export type SecondaryDisplayStoreSlice = {
  secondaryDisplay: SecondaryDisplayMessagePayload;
  setSecondaryDisplay: (payload: SecondaryDisplayMessagePayload) => void;
};
export type ModalitiesStoreSlice = {
  modalities: ModalityModalitiesResponseData["mainDb_modalities"];
  setModalities: (
    modalities: ModalityModalitiesResponseData["mainDb_modalities"]
  ) => void;
  updateModalities: (
    modality: ModalityModalitiesResponseData["mainDb_modalities"][0]
  ) => void;
};

export type MobileDevicesStoreSlice = {
  mobileDevices: MobileDevicesMobileDevicesQueryResponseData["mainDb_mobileDevices"];
  setMobileDevices: (
    mobileDevices: MobileDevicesMobileDevicesQueryResponseData["mainDb_mobileDevices"]
  ) => void;
  removeMobileDevice: (
    mobileDevice: MobileDevicesMobileDevicesQueryResponseData["mainDb_mobileDevices"][0]
  ) => void;
  updateMobileDevice: (
    mobileDevice: MobileDevicesMobileDevicesQueryResponseData["mainDb_mobileDevices"][0]
  ) => void;
  addMobileDevice: (
    mobileDevice: MobileDevicesMobileDevicesQueryResponseData["mainDb_mobileDevices"][0]
  ) => void;
};

export type PatientSpotlight = {
  id: string;
  label: string;
  description: string;
  patientId: string;
  consultationList: ConsultationListTodayListsResponseData["mainDb_consultationLists"][0];
};

export type PatientSpotlightStoreSlice = {
  patientSpotlights: PatientSpotlight[];
  displayedList: PatientSpotlight[];
  listQuery: string;
  setDisplayedList: (limit: number) => void;
  setPatientsSpotlights: (patientSpotlights: PatientSpotlight[]) => void;
  addPatientSpotlight: (patientSpotlight: PatientSpotlight) => void;
  updatePatientSpotlight: (patientSpotlight: PatientSpotlight) => void;
  removePatientSpotlight: (patientSpotlight: PatientSpotlight) => void;
  setListQuery: (listQuery: string) => void;
};

export type FocusedDocumentType = {
  d: DocumentHeaderElementTypeWithId;
  payload: string;
};

export type FocusedClinicalEvent = {
  eventId: string;
  eventType: mainDb_EventTypesValues;
  createdAt: string;
};

export type PlateStoreSlice = {
  documentHeaders: DocumentHeaderElementTypeWithId[];
  focusedClinicalEvent: FocusedClinicalEvent | null;
  setDocumentHeaders: (d: DocumentHeaderElementTypeWithId[]) => void;
  addDocumentHeader: (d: DocumentHeaderElementTypeWithId) => void;
  removeDocumentHeader: (d: DocumentHeaderElementTypeWithId) => void;
  setFocusedClinicalEvent: (event: FocusedClinicalEvent) => void;
};

export type AppSubscriptionSlice = {
  subscribedUsers: subscribedUsers[];
  setSubscribedUsers: (users: subscribedUsers[]) => void;
  addSubscribedUser: (user: subscribedUsers) => void;
  removeSubscribedUser: (user: subscribedUsers) => void;
};

export type EconomizersSlice = {
  economizers: EconomizersEconomizersResponseData["mainDb_economizers"];

  setEconomizers: (
    economizers: EconomizersEconomizersResponseData["mainDb_economizers"]
  ) => void;

  addEconomizers: (
    economizers: EconomizersEconomizersResponseData["mainDb_economizers"][0]
  ) => void;
  updateEconomizer: (
    economizer: EconomizersEconomizersResponseData["mainDb_economizers"][0]
  ) => void;
  deleteEconomizer: (
    economizer: EconomizersEconomizersResponseData["mainDb_economizers"][0]
  ) => void;
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

export type boltStoreType = ConsultationStoreSlice &
  PatientStoreSlice &
  TabStoreSlice &
  PrescriptionStoreSlice &
  ClinicalEventStoreSlice &
  UserStoreSlice &
  SecondaryDisplayStoreSlice &
  ModalitiesStoreSlice &
  MobileDevicesStoreSlice &
  PatientSpotlightStoreSlice &
  PlateStoreSlice &
  AppSubscriptionSlice &
  EconomizersSlice &
  WebsocketConnectionSlice;