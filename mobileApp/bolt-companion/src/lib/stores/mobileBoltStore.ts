import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { MobileBoltStoreType } from "./mobileBoltStoresType";
import createSpinnerStoreSlice from "./spinnerStore";
import createThemeStoreSlice from "./themeStore";
import createWundergraphStoreSlice from "./wundergraphStore";
import createWebSocketConnection from "./webSocketConnectionSlice";
import createConsultationPatientsStoreSlice from "./consultationPatientsStors";
import createPatientScannedDocumentSlice from "./patientScannedDocumentStore";

export const useMobileBoltStore = create<MobileBoltStoreType>()(
  immer((...a) => {
    return {
      ...createSpinnerStoreSlice(...a),
      ...createThemeStoreSlice(...a),
      ...createWundergraphStoreSlice(...a),
      ...createWebSocketConnection(...a),
      ...createConsultationPatientsStoreSlice(...a),
      ...createPatientScannedDocumentSlice(...a),
    };
  })
);
