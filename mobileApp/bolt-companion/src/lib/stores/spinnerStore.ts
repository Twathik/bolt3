import type { StateCreator } from "zustand";
import { MobileBoltStoreType, SpinnerStoreSlice } from "./mobileBoltStoresType";

const createSpinnerStoreSlice: StateCreator<
  MobileBoltStoreType,
  [["zustand/immer", never], never],
  [],
  SpinnerStoreSlice
> = (set) => {
  return {
    appSpinnerLoading: false,
    setAppSpinnerLoading(loading) {
      set((s) => {
        s.appSpinnerLoading = loading;
      });
    },
  };
};

export default createSpinnerStoreSlice;
