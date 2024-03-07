import type { StateCreator } from "zustand";
import type { TabStoreSlice, boltStoreType } from "./boltStoreType";

const createTabSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  TabStoreSlice
> = (set) => ({
  tabs: [],
  closeTabs: () => {
    set((state) => {
      state.tabs.forEach((tab) => tab.close());
      state.tabs = [];
    });
  },
  addTab: (tab) => {
    set((state) => {
      state.tabs.push(tab);
    });
  },
});

export default createTabSlice;
