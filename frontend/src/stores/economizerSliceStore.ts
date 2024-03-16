import type { StateCreator } from "zustand";
import type { EconomizersSlice, boltStoreType } from "./boltStoreType";

const economizerPlateSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  EconomizersSlice
> = (set) => ({
  economizers: [],

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

export default economizerPlateSlice;
