import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ThemeStore {
  isDarkTheme: boolean;
  isSecretaryTheme: boolean;
  setDarkTheme: (darkTheme: boolean) => void;
  setIsSecretaryTheme: (secretary: boolean) => void;
}

const useThemeStore = create(
  immer<ThemeStore>((set) => ({
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
  }))
);

export default useThemeStore;
