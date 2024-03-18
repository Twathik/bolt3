import { useBoltStore } from "@/stores/boltStore";
import WorkingListItem from "./WorkingListItem";

function WorkingLists() {
  const workingLists = useBoltStore((store) => store.workingLists);

  return (
    <div>
      {workingLists.map((w) => (
        <WorkingListItem key={w.id} workingList={w} />
      ))}
    </div>
  );
}

export default WorkingLists;
