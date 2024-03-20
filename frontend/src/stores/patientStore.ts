import type { StateCreator } from "zustand";
import type { PatientStoreSlice, boltStoreType } from "./boltStoreType";

const createPatientSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  PatientStoreSlice
> = (set) => ({
  patient: null,

  documentData: [{ type: "p", children: [{ text: "" }] }],
  onTrash: [],
  setPatient: (patient) => {
    set((state) => {
      state.patient = patient;
    });
  },
  setDocumentData: (version) => {
    set((s) => {
      s.documentData = version;
    });
  },
  setOnTrashPatients: (onTrash) => {
    set((s) => {
      s.onTrash = onTrash;
    });
  },
  addPatientToTrash: (addToTrash) => {
    set((s) => {
      s.onTrash.push(addToTrash);
    });
  },
  removePatientFromTrash: (removeFromTrash) => {
    set((s) => {
      s.onTrash = s.onTrash.filter((p) => p.id !== removeFromTrash.id);
    });
  },
});

export default createPatientSlice;
