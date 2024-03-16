/* eslint-disable react/no-unescaped-entities */
import { useBoltStore } from "@/stores/boltStore";
import AddNewWorkingListItem from "./Dicom/AddNewWorkingListItem";
import { useMemo } from "react";
import isDicomAvailable from "../../../../../../lib/utils/DicomUtils";
import WorkingLists from "./Dicom/WorkingLists";

function DicomIndex() {
  const focusedDocument = useBoltStore((s) => s.focusedDocument);
  const dicomAvailable = useMemo(
    () => isDicomAvailable(focusedDocument),
    [focusedDocument]
  );
  if (!dicomAvailable) {
    return (
      <div className="w-full shadow-lg rounded-md border-slate-500 border-[1px] mb-5 text-center p-2">
        Il n'éxiste pas de serveur d'imagerie configuré pour ce type de
        documents
      </div>
    );
  }
  return (
    <div className="w-full shadow-lg rounded-md border-slate-500 border-[1px] mb-5 p-2">
      <AddNewWorkingListItem />
      <WorkingLists />
    </div>
  );
}

export default DicomIndex;
