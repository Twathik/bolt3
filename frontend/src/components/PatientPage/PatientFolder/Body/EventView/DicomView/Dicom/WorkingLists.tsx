import { useBoltStore } from "@/stores/boltStore";
import WorkingListItem from "./WorkingListItem";
import _ from "lodash";

function WorkingLists() {
  const workingLists = useBoltStore((s) => s.workingLists);

  return (
    <div>
      {_.uniqBy(workingLists, "id").map((w) => (
        <WorkingListItem key={w.id} workingList={w} />
      ))}
    </div>
  );
}

export default WorkingLists;
