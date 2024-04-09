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
    screenType: "mainScreen",
  },
  patientTab: "informations",
  setSecondaryDisplay: (secondaryDisplay) => {
    set((state) => {
      state.secondaryDisplay = secondaryDisplay;
    });
  },
  setPatientViewTab(tab) {
    set((s) => {
      s.patientTab = tab;
    });
  },
});

export default createSecondaryDisplaySlice;
