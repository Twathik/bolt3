import type { StateCreator } from "zustand";
import type {
  SecondaryDisplayStoreSlice,
  boltStoreType,
} from "./boltStoreType";

const createSecondaryDisplaySlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  SecondaryDisplayStoreSlice
> = (set) => ({
  secondaryDisplay: {
    displayType: "main",
    id: "",
    payload: "",
  },
  setSecondaryDisplay: (secondaryDisplay) => {
    set((state) => {
      state.secondaryDisplay = secondaryDisplay;
    });
  },
});

export default createSecondaryDisplaySlice;
