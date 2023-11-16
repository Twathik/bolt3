import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface consultationState {
  id: null | string;
  refetch: boolean;
}

interface Store {
  consultationState: consultationState;
  setConsultationId: (consultationId: string | null) => void;
}

const useConsultationStore = create<Store>()(
  immer((set) => ({
    consultationState: {
      id: null,
      refetch: false,
    },
    setConsultationId: (consultationId) => {
      set((state) => {
        state.consultationState.id = consultationId;
      });
    },
  }))
);

export default useConsultationStore;
