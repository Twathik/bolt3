import type { StateCreator } from "zustand";
import type { PatientStoreSlice, boltStoreType } from "./boltStoreType";

const createPatientSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  PatientStoreSlice
> = (set) => ({
  patient: null,
  setPatient: (patient) => {
    set((state) => {
      state.patient = patient;
    });
  },
});

export default createPatientSlice;
