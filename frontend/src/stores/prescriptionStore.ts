import type { DrugHitInterface } from "@/lib/interfaces/DrugsInterfaces";
import type { StateCreator } from "zustand";
import type { PrescriptionStoreSlice, boltStoreType } from "./boltStoreType";

const createPrescriptionSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  PrescriptionStoreSlice
> = (set) => ({
  prescriptions: [],
  setInitialPrescriptions: (prescriptions: DrugHitInterface[]) =>
    set((state) => {
      state.prescriptions = prescriptions;
    }),
  addPrescription: (prescription: DrugHitInterface) =>
    set((state) => {
      state.prescriptions.push(prescription);
    }),
  removePrescription: (prescription) =>
    set((state) => {
      state.prescriptions = state.prescriptions.filter(
        (p) => p.prescriptionId !== prescription.prescriptionId
      );
    }),
});

export default createPrescriptionSlice;
