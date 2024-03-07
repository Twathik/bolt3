import type { DrugHitInterface } from "@/lib/interfaces/DrugsInterfaces";
import type { StateCreator } from "zustand";
import type { PrescriptionStoreSlice, boltStoreType } from "./boltStoreType";

const createPrescriptionSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  PrescriptionStoreSlice
> = (set) => ({
  loadingPrescription: false,
  prescriptions: [],
  setInitialPrescriptions: (prescriptions: DrugHitInterface[]) =>
    set((state) => {
      state.prescriptions = prescriptions;
    }),
  addPrescription: (prescription: DrugHitInterface) =>
    set((state) => {
      state.prescriptions.push(prescription);
    }),
  removePrescription: (prescriptionId: string) =>
    set((state) => {
      state.prescriptions = state.prescriptions.filter(
        (p) => p.prescriptionId !== prescriptionId
      );
    }),
  setLoadingPrescription: (loading: boolean) =>
    set((state) => {
      state.loadingPrescription = loading;
    }),
});

export default createPrescriptionSlice;
