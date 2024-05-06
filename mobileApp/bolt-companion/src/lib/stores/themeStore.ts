import type { StateCreator } from "zustand";
import { MobileBoltStoreType, ThemeStoreSlice } from "./mobileBoltStoresType";

const createThemeStoreSlice: StateCreator<
  MobileBoltStoreType,
  [["zustand/immer", never], never],
  [],
  ThemeStoreSlice
> = (set) => ({
  isDarkTheme: false,
  setDarkTheme: (darkTheme) => {
    set((state) => {
      state.isDarkTheme = darkTheme;
    });
  },
  isSecretaryTheme: false,
  setIsSecretaryTheme: (secretary) => {
    set((state) => {
      state.isSecretaryTheme = secretary;
    });
  },
});

export default createThemeStoreSlice;
