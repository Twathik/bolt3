import type { StateCreator } from "zustand";
import type { WebsocketConnectionSlice, boltStoreType } from "./boltStoreType";

const createWebSocketConnection: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  WebsocketConnectionSlice
> = (set) => ({
  socket: null,
  setSocket: (socket) => {
    set((s) => {
      s.socket = socket;
    });
  },
});

export default createWebSocketConnection;
