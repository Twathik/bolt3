import type { StateCreator } from "zustand";
import {
  MobileBoltStoreType,
  PatientScannedDocumentSlice,
} from "./mobileBoltStoresType";

const createPatientScannedDocumentSlice: StateCreator<
  MobileBoltStoreType,
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
      s.patientScannedDocuments = [doc, ...s.patientScannedDocuments];
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
