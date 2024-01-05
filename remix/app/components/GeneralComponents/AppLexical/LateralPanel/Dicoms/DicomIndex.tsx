import { useBoltStore } from "@/stores/boltStore";
import LateralPanelCard from "../LateralPanelCard";
import AddNewWorkingListItem from "./Dicom/AddNewWorkingListItem";
import WorkingLists from "./Dicom/WorkingLists";

function DicomIndex({ notApplicable }: { notApplicable?: boolean }) {
  const clinicalEvent = useBoltStore((store) => store.clinicalEvent);
  return (
    <>
      {notApplicable ? (
        <LateralPanelCard
          cardTitle="Imagerie"
          cardDescription="Il n'existe pas d'imagerie pour ce type de document"
          clinicalEvent={clinicalEvent!}
          cardContent={<></>}
          cardFooter={<></>}
        />
      ) : (
        <>
          <AddNewWorkingListItem />
          <WorkingLists />
        </>
      )}
    </>
  );
}

export default DicomIndex;
