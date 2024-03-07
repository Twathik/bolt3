import type { StateCreator } from "zustand";
import type { PatientStoreSlice, boltStoreType } from "./boltStoreType";

const createPatientSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  PatientStoreSlice
> = (set) => ({
  patient: null,
  patientView: "folder",
  setPatient: (patient) => {
    set((state) => {
      state.patient = patient;
    });
  },
  setPatientView: (view) => {
    set((s) => {
      s.patientView = view;
    });
  },
});

export default createPatientSlice;
