import type { StateCreator } from "zustand";
import type { AppSubscriptionSlice, boltStoreType } from "./boltStoreType";

const appSubscriptionSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  AppSubscriptionSlice
> = (set) => ({
  SubscriptionIds: [""],
  setSubscriptionIds: (sIds) => {
    set((s) => {
      s.SubscriptionIds = sIds;
    });
  },
});

export default appSubscriptionSlice;
