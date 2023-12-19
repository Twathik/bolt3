import type { StateCreator } from "zustand";
import type { ClinicalEventStoreSlice, boltStoreType } from "./boltStoreType";

const createClinicalEventSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  ClinicalEventStoreSlice
> = (set) => ({
  clinicalEvent: null,
  modalities: [],
  workingLists: [],
  editorConfiguration: [],
  economizers: [],

  setClinicalEvent: (clinicalEvent) => {
    set((state) => {
      state.clinicalEvent = clinicalEvent;
    });
  },
  setModalities: (modalities) => {
    set((state) => {
      state.modalities = modalities;
    });
  },
  setWorkingLists: (workingLists) => {
    set((state) => {
      state.workingLists = workingLists;
    });
  },
  setEditorConfiguration: (editorConfiguration) => {
    set((state) => {
      state.editorConfiguration = editorConfiguration;
    });
  },
  setEconomizers: (economizers) => {
    set((state) => {
      state.economizers = economizers;
    });
  },
  addEconomizers: (economiseur) => {
    set((state) => {
      state.economizers.push(economiseur);
    });
  },
  updateEconomizer: (economizer) => {
    set((state) => {
      const index = state.economizers.findIndex((e) => e.id === economizer.id);
      if (index !== -1) state.economizers[index] = economizer;
    });
  },
  deleteEconomizer: (economizer) => {
    set((state) => {
      state.economizers = state.economizers.filter(
        (e) => e.id != economizer.id
      );
    });
  },
});

export default createClinicalEventSlice;
