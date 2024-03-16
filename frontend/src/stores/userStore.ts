import type { StateCreator } from "zustand";
import type { UserStoreSlice, boltStoreType } from "./boltStoreType";

const createUserSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  UserStoreSlice
> = (set) => ({
  user: { searchApiKey: "", editorApiKey: "" },
  setUser: (user) => {
    set((state) => {
      state.user = user;
    });
  },
});

export default createUserSlice;
