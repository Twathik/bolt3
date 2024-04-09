import type { StateCreator } from "zustand";
import type { PlateStoreSlice, boltStoreType } from "./boltStoreType";

const createPlateSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  PlateStoreSlice
> = (set) => ({
  documentHeaders: [],
  focusedClinicalEvent: null,
  setDocumentHeaders: (d) => {
    set((s) => {
      s.documentHeaders = d;
    });
  },
  addDocumentHeader: (d) => {
    set((state) => {
      state.documentHeaders.push(d);
    });
  },
  removeDocumentHeader: (d) => {
    set((s) => {
      s.documentHeaders = s.documentHeaders.filter(
        (doc) => doc.eventId !== d.eventId
      );
    });
  },
  setFocusedClinicalEvent(event) {
    set((s) => {
      s.focusedClinicalEvent = event;
      s.focusedWorkingList = null;
      s.patientTab = "focusedDocument";
    });
  },
});

export default createPlateSlice;
