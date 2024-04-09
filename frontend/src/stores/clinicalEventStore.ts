import type { StateCreator } from "zustand";
import type { ClinicalEventStoreSlice, boltStoreType } from "./boltStoreType";

const createClinicalEventSlice: StateCreator<
  boltStoreType,
  [["zustand/immer", never], never],
  [],
  ClinicalEventStoreSlice
> = (set) => ({
  clinicalEvents: [],
  clinicalEvent: null,
  modalities: [],
  workingLists: [],
  editorConfiguration: [],
  economizers: [],
  focusedWorkingList: null,

  setClinicalEvent: (clinicalEvent) => {
    set((state) => {
      state.clinicalEvent = clinicalEvent;
    });
  },
  setClinicalEvents: (clinicalEvents) => {
    set((state) => {
      state.clinicalEvents = clinicalEvents;
    });
  },
  addClinicalEvent: (clinicalEvent) => {
    set((state) => {
      state.clinicalEvents.push(clinicalEvent);
    });
  },
  updateClinicalEvent: (clinicalEvent) => {
    set((state) => {
      const index = state.clinicalEvents.findIndex(
        (e) => e.id === clinicalEvent.id
      );
      if (index !== -1) state.clinicalEvents[index] = clinicalEvent;
    });
  },
  removeClinicalEvent: (clinicalEvent) => {
    set((state) => {
      state.clinicalEvents = state.clinicalEvents.filter(
        (e) => e.id !== clinicalEvent.id
      );
    });
  },

  setModalities: (modalities) => {
    set((state) => {
      state.modalities = modalities;
    });
  },
  setWorkingLists: (workingLists) => {
    set((state) => {
      state.workingLists = workingLists;
    });
  },
  addWorkingList: (workingList) => {
    set((state) => {
      state.workingLists.push(workingList);
    });
  },
  updateWorkingList: (workingList) => {
    set((state) => {
      const index = state.workingLists.findIndex(
        (e) => e.id === workingList.id
      );
      if (index !== -1) state.workingLists[index] = workingList;
    });
  },
  removeWorkingList: (workingList) => {
    set((state) => {
      state.workingLists = state.workingLists.filter(
        (e) => e.id != workingList.id
      );
    });
  },
  setFocusedWorkingList(workingLists) {
    set((s) => {
      s.focusedWorkingList = workingLists;
      s.patientTab = "dicomView";
    });
  },
  setEditorConfiguration: (editorConfiguration) => {
    set((state) => {
      state.editorConfiguration = editorConfiguration;
    });
  },
});

export default createClinicalEventSlice;
