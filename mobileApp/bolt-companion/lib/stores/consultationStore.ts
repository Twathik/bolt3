import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ConsultationStore {
  consultationId: string | null;
  setConsultationId: (consultationId: string | null) => void;
}

const useConsultationStore = create(
  immer<ConsultationStore>((set) => ({
    consultationId: null,
    setConsultationId: (consultationId) => {
      set((state) => {
        state.consultationId = consultationId;
      });
    },
  }))
);

export default useConsultationStore;
