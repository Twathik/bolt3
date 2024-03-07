import type { StateCreator } from "zustand";
import type { ConsultationStoreSlice, boltStoreType } from "./boltStoreType";

const createConsultationSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  ConsultationStoreSlice
> = (set) => ({
  consultationState: {
    id: null,
    allowedEventTypes: [],
  },
  setConsultationState: (consultationState) =>
    set((state) => {
      state.consultationState = consultationState;
    }),
});

export default createConsultationSlice;
