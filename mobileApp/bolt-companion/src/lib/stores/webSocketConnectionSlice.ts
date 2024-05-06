import type { StateCreator } from "zustand";
import {
  MobileBoltStoreType,
  WebsocketConnectionSlice,
} from "./mobileBoltStoresType";

const createWebSocketConnection: StateCreator<
  MobileBoltStoreType,
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
