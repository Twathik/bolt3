import type { StateCreator } from "zustand";
import type { MobileDevicesStoreSlice, boltStoreType } from "./boltStoreType";

const createMobileDevicesSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  MobileDevicesStoreSlice
> = (set) => ({
  mobileDevices: [],
  setMobileDevices: (mobileDevices) => {
    set((state) => {
      state.mobileDevices = mobileDevices;
    });
  },
  updateMobileDevice: (mobileDevice) => {
    set((state) => {
      const index = state.mobileDevices.findIndex(
        (e) => e.id === mobileDevice.id
      );
      if (index !== -1) state.mobileDevices[index] = mobileDevice;
    });
  },
  addMobileDevice: (mobileDevice) => {
    set((state) => {
      state.mobileDevices.push(mobileDevice);
    });
  },
  removeMobileDevice: (mobileDevice) => {
    set((state) => {
      state.mobileDevices = state.mobileDevices.filter(
        (e) => e.id !== mobileDevice.id
      );
    });
  },
});

export default createMobileDevicesSlice;
