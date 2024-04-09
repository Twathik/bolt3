import type { StateCreator } from "zustand";
import type { CursorStateStoreSlice, boltStoreType } from "./boltStoreType";

const createCursorStateSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  CursorStateStoreSlice
> = (set) => ({
  cursorStates: [],
  setCursorStates(states) {
    set((s) => {
      s.cursorStates = states;
    });
  },
});

export default createCursorStateSlice;
