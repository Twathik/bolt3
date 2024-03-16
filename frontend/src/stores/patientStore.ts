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
  documentVersion: "",
  focusedPatientId: "",
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
  setDocumentVersion: (version) => {
    set((s) => {
      s.documentVersion = version;
    });
  },
  setFocusedPatientId: (id) => {
    set((s) => {
      console.log({ id });
      s.focusedPatientId = id;
    });
  },
});

export default createPatientSlice;
