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
  onTrash: [],
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
