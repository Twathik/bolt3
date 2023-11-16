import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface PrescriptionInterface {
  id: string;
  prescription?: string;
  quantity?: number;
  quantity_string?: string;
  frequency?: number;
  frequency_string?: string;
}

type State = {
  prescriptions: PrescriptionInterface[];
};

type Actions = {
  setInitialPrescriptions: (prescriptions: PrescriptionInterface[]) => void;
  addPrescription: (prescription: PrescriptionInterface) => void;
  removePrescription: (id: string) => void;
};

export const usePrescriptionStore = create<State & Actions>()(
  immer((set) => ({
    prescriptions: [],
    setInitialPrescriptions: (prescriptions: PrescriptionInterface[]) =>
      set((state) => {
        state.prescriptions = prescriptions;
      }),
    addPrescription: (prescription: PrescriptionInterface) =>
      set((state) => {
        state.prescriptions.push(prescription);
      }),
    removePrescription: (id: string) =>
      set((state) => {
        state.prescriptions = state.prescriptions.filter((p) => p.id !== id);
      }),
  }))
);
