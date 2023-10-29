import type { PatientsGetOnePatientResponseData } from "@/components/generated/models";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Store {
  patient: PatientsGetOnePatientResponseData["mainDb_getPatient"] | null;
  setPatient: (
    patient: PatientsGetOnePatientResponseData["mainDb_getPatient"] | null
  ) => void;
}

const usePatientStore = create(
  immer<Store>((set) => ({
    patient: null,
    setPatient: (patient) => {
      set((state) => {
        state.patient = patient;
      });
    },
  }))
);

export default usePatientStore;
