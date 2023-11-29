import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { boltStoreType } from "./boltStoreType";
import createConsultationSlice from "./consultationStore";
import createPatientSlice from "./patientStore";
import createTabSlice from "./tabsStore";
import PrescriptionStoreSlice from "./prescriptionStore";

export const useBoltStore = create<boltStoreType>()(
  immer((...a) => ({
    ...createConsultationSlice(...a),
    ...createPatientSlice(...a),
    ...createTabSlice(...a),
    ...PrescriptionStoreSlice(...a),
  }))
);
