import type { StateCreator } from "zustand";
import type {
  PatientSpotlightStoreSlice,
  boltStoreType,
} from "./boltStoreType";
import Fuse from "fuse.js";

const createPatientSpotlightSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  PatientSpotlightStoreSlice
> = (set, get) => ({
  patientSpotlights: [],
  displayedList: [],
  listQuery: "",
  setDisplayedList: (limit) => {
    const query = get().listQuery;

    set((state) => {
      if (query.length > 0) {
        const index = Fuse.createIndex(["label"], get().patientSpotlights);
        const fuse = new Fuse(get().patientSpotlights, {}, index);
        const result = fuse.search(query);
        state.displayedList = result.map((r) => r.item).slice(0, limit);
      } else {
        state.displayedList = get().patientSpotlights.slice(0, limit);
      }
    });
  },
  setPatientsSpotlights: (patientSpotlights) => {
    set((state) => {
      state.patientSpotlights = patientSpotlights;
    });
  },
  updatePatientSpotlight: (patientSpotlight) => {
    set((state) => {
      const index = state.patientSpotlights.findIndex(
        (e) => e.patientId === patientSpotlight.patientId
      );
      if (index !== -1) state.patientSpotlights[index] = patientSpotlight;
    });
  },
  addPatientSpotlight: (patientSpotlight) => {
    set((state) => {
      state.patientSpotlights.push(patientSpotlight);
    });
  },
  removePatientSpotlight: (patientSpotlight) => {
    set((state) => {
      state.patientSpotlights = state.patientSpotlights.filter(
        (e) => e.patientId !== patientSpotlight.patientId
      );
    });
  },
  setListQuery: (listQuery) => {
    set((state) => {
      state.listQuery = listQuery;
    });
  },
});

export default createPatientSpotlightSlice;
