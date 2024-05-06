import axios from "axios";
import { baseURL } from "../CONST";

import type { StateCreator } from "zustand";
import {
  MobileBoltStoreType,
  wundergraphStoreSlice,
} from "./mobileBoltStoresType";

const createWundergraphStoreSlice: StateCreator<
  MobileBoltStoreType,
  [["zustand/immer", never], never],
  [],
  wundergraphStoreSlice
> = (set) => ({
  uuid: null,
  appAxios: axios.create({ baseURL }),
  authToken: "",
  user: null,
  setUuid: (uuid) => {
    set((state) => {
      state.uuid = uuid;
    });
  },
  setAuthToken: (authToken) => {
    set((state) => {
      state.authToken = authToken;
      state.appAxios = axios.create({
        baseURL,
        headers: { Authorization: authToken },
      });
    });
  },

  setUser: (user) => {
    set((state) => {
      state.user = user;
    });
  },
});

export default createWundergraphStoreSlice;
