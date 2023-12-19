import LateralPanelCard from "@/components/GeneralComponents/AppLexical/LateralPanel/LateralPanelCard";
import { useBoltStore } from "@/stores/boltStore";
import WorkingListItem from "./WorkingListItem";

function WorkingLists() {
  const clinicalEvent = useBoltStore((store) => store.clinicalEvent);
  const workingLists = useBoltStore((store) => store.workingLists);

  return (
    <LateralPanelCard
      cardTitle="Working Lists"
      cardDescription="Examen envoyés au appareils d'imgeries"
      clinicalEvent={clinicalEvent!}
      cardContent={
        <>
          <div>
            {workingLists.map((w) => (
              <WorkingListItem key={w.id} workingList={w} />
            ))}
          </div>
        </>
      }
      cardFooter={<></>}
    />
  );
}

export default WorkingLists;
