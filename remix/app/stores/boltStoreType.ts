import type {
  ClinicalEventsGetClinicalEventResponseData,
  DataTableGetDataTableConfigurationsResponseData,
  EconomizersEconomizersResponseData,
  ModalityGetSpecificModalitiesResponseData,
  PatientsGetOnePatientResponseData,
  WorkingListsWorkingListsResponseData,
} from "@/components/generated/models";
import type { DrugHitInterface } from "@/lib/interfaces/DrugsInterfaces";

export type appUser = {
  avatarUrl?: String;
  searchApiKey: string;
};
export type UserStoreSlice = {
  user: appUser;
  setUser: (user: appUser) => void;
};
export type ConsultationStoreSlice = {
  consultationState: {
    id: null | string;
    refetch: boolean;
  };
  setConsultationId: (consultationId: string | null) => void;
};

export type PatientStoreSlice = {
  patient: PatientsGetOnePatientResponseData["mainDb_getPatient"] | null;
  setPatient: (
    patient: PatientsGetOnePatientResponseData["mainDb_getPatient"] | null
  ) => void;
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
  modalities: ModalityGetSpecificModalitiesResponseData["mainDb_modalities"];
  workingLists: WorkingListsWorkingListsResponseData["mainDb_workingLists"];
  editorConfiguration: DataTableGetDataTableConfigurationsResponseData["mainDb_getDataTableConfiguration"];
  economizers: EconomizersEconomizersResponseData["mainDb_economizers"];

  setClinicalEvent: (
    clinicalEvent: ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"]
  ) => void;
  setModalities: (
    modalities: ModalityGetSpecificModalitiesResponseData["mainDb_modalities"]
  ) => void;
  setWorkingLists: (
    workingLists: WorkingListsWorkingListsResponseData["mainDb_workingLists"]
  ) => void;
  setEditorConfiguration: (
    editorConfiguration: DataTableGetDataTableConfigurationsResponseData["mainDb_getDataTableConfiguration"]
  ) => void;
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

export type boltStoreType = ConsultationStoreSlice &
  PatientStoreSlice &
  TabStoreSlice &
  PrescriptionStoreSlice &
  ClinicalEventStoreSlice &
  UserStoreSlice;
