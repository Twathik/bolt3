import type { StateCreator } from "zustand";
import type {
  PatientScannedDocumentSlice,
  boltStoreType,
} from "./boltStoreType";

const createPatientScannedDocumentSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  PatientScannedDocumentSlice
> = (set) => ({
  patientScannedDocuments: [],
  setPatientScannedDocuments(docs) {
    set((s) => {
      s.patientScannedDocuments = docs;
    });
  },
  addPatientScannedDocument(doc) {
    set((s) => {
      s.patientScannedDocuments.push(doc);
    });
  },
  removePatientScannedDocument(id) {
    set((s) => {
      s.patientScannedDocuments = s.patientScannedDocuments.filter(
        (d) => d.id !== id
      );
    });
  },
});

export default createPatientScannedDocumentSlice;
