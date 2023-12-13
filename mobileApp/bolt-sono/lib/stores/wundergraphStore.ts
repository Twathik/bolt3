import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { appUser } from "../types/appUserInterface";
import axios, { AxiosInstance } from "axios";
import { baseURL } from "../CONST";

interface Store {
  uuid: string | null;
  authToken: string;
  user: appUser | null;
  appAxios: AxiosInstance;
  setUuid: (uuid: string) => void;
  setAuthToken: (authToken: string) => void;
  setUser: (user: appUser | null) => void;
}

const useWundergraphStore = create(
  immer<Store>((set) => ({
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
  }))
);

export default useWundergraphStore;
