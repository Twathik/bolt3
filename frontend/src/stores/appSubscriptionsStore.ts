import type { StateCreator } from "zustand";
import type { AppSubscriptionSlice, boltStoreType } from "./boltStoreType";

const appSubscriptionSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  AppSubscriptionSlice
> = (set) => ({
  subscribedUsers: [],
  setSubscribedUsers: (users) => {
    set((s) => {
      s.subscribedUsers = users;
    });
  },
  addSubscribedUser: (user) => {
    set((s) => {
      s.subscribedUsers.push(user);
    });
  },
  removeSubscribedUser: (user) => {
    set((s) => {
      // const newUsers = s.subscribedUsers.filter((u) => u.id !== user.id);

      s.subscribedUsers = s.subscribedUsers.filter((u) => u.id !== user.id);
    });
  },
});

export default appSubscriptionSlice;
