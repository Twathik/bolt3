import type { PatientsGetOnePatientResponseData } from "@/components/generated/models";
import type { DrugHitInterface } from "@/lib/interfaces/DrugsInterfaces";

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

export type boltStoreType = ConsultationStoreSlice &
  PatientStoreSlice &
  TabStoreSlice &
  PrescriptionStoreSlice;
