import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface SpinnerStore {
  appSpinnerLoading: boolean;
  setAppSpinnerLoading: (loading: boolean) => void;
}

const useSpinnerStore = create(
  immer<SpinnerStore>((set) => ({
    appSpinnerLoading: true,

    setAppSpinnerLoading: (loading) => {
      set((state) => {
        state.appSpinnerLoading = loading;
      });
    },
  }))
);

export default useSpinnerStore;
