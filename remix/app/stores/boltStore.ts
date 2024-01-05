import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { boltStoreType } from "./boltStoreType";
import createConsultationSlice from "./consultationStore";
import createPatientSlice from "./patientStore";
import createTabSlice from "./tabsStore";
import PrescriptionStoreSlice from "./prescriptionStore";
import createClinicalEventSlice from "./clinicalEventStore";
import createUserSlice from "./userStore";
import createSecondaryDisplaySlice from "./secondaryDisplayStore";
import createModalitiesSlice from "./modalitiesStore";
import createMobileDevicesSlice from "./mobileDevicesStore";
import createPatientSpotlightSlice from "./patientSpotlightStore";

export const useBoltStore = create<boltStoreType>()(
  immer((...a) => ({
    ...createConsultationSlice(...a),
    ...createPatientSlice(...a),
    ...createTabSlice(...a),
    ...PrescriptionStoreSlice(...a),
    ...createClinicalEventSlice(...a),
    ...createUserSlice(...a),
    ...createSecondaryDisplaySlice(...a),
    ...createModalitiesSlice(...a),
    ...createMobileDevicesSlice(...a),
    ...createPatientSpotlightSlice(...a),
  }))
);
