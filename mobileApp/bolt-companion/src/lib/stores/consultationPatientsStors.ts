import type { StateCreator } from "zustand";
import {
  ConsultationPatientSlice,
  MobileBoltStoreType,
} from "./mobileBoltStoresType";

const createConsultationPatientsStoreSlice: StateCreator<
  MobileBoltStoreType,
  [["zustand/immer", never], never],
  [],
  ConsultationPatientSlice
> = (set, get) => {
  return {
    consultationPatients: [],
    setConsultationPatients(patients) {
      set((s) => {
        s.consultationPatients = patients;
      });
    },
    addConsultationPatient(patient) {
      set((s) => {
        s.consultationPatients.push(patient);
      });
    },
    removeConsultationPatient(patient) {
      set((s) => {
        s.consultationPatients = s.consultationPatients.filter(
          (p) => p.id !== patient.id
        );
      });
    },
    updateConsultationPatient(patient) {
      set((s) => {
        const index = get().consultationPatients.findIndex(
          (p) => p.id === patient.id
        );
        if (index !== -1) {
          s.consultationPatients[index] = patient;
        }
      });
    },
  };
};

export default createConsultationPatientsStoreSlice;
