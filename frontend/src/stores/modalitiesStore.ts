import type { StateCreator } from "zustand";
import type { ModalitiesStoreSlice, boltStoreType } from "./boltStoreType";

const createModalitiesSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  ModalitiesStoreSlice
> = (set) => ({
  modalities: [],
  setModalities: (modalities) => {
    set((state) => {
      state.modalities = modalities;
    });
  },
  updateModalities: (modality) => {
    set((state) => {
      const index = state.modalities.findIndex((e) => e.id === modality.id);
      if (index !== -1) state.modalities[index] = modality;
    });
  },
});

export default createModalitiesSlice;
