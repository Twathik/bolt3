import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type tabStore = {
  tabs: any[];
  closeTabs: () => void;
  addTab: (tab: any) => void;
};

const useTabsStore = create<tabStore>()(
  immer<tabStore>((set) => ({
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
  }))
);

export default useTabsStore;
