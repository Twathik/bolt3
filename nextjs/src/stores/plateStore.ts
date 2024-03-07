import type { StateCreator } from "zustand";
import type { PlateStoreSlice, boltStoreType } from "./boltStoreType";

const createPlateSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  PlateStoreSlice
> = (set) => ({
  documentHeaders: [],
  focusedDocument: null,
  disableSaveButton: false,
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
  setFocusedDocument: (d) => {
    set((s) => {
      s.focusedDocument = d;
    });
  },
  setDisableSaveButton: (buttonState) => {
    set((s) => {
      s.disableSaveButton = buttonState;
    });
  },
});

export default createPlateSlice;
