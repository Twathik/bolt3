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
    refetch: false,
  },
  setConsultationId: (consultationId: any) =>
    set((state) => {
      state.consultationState.id = consultationId;
    }),
});

export default createConsultationSlice;
