import type { WorkingListsWorkingListsResponseData } from "@/components/generated/models";
import { classNames } from "@/lib/utils";

import { format, parseISO } from "date-fns";
import { useCallback } from "react";
import ToggleLockWorkingList from "./ToggleLockWorkingList";
import DeleteWorkingListItem from "./DeleteWorkingListItem";
import DisplayExam from "../../../../DICOMcomponents/DisplayExam";

function WorkingListItem({
  workingList,
}: {
  workingList: WorkingListsWorkingListsResponseData["mainDb_workingLists"][0];
}) {
  const getStatus = useCallback((): { status: string } => {
    switch (workingList.modalityExamStatus) {
      case "CREATED":
        return { status: "Inscris" };
      case "CLOSED":
        return { status: "Fermé" };
      case "INPROGRESS":
        return { status: "En cours" };
      case "REALIZED":
        return { status: "Réalisé" };
      case "REPORT_DONE":
        return { status: "Rapport prêt" };

      default:
        throw Error("Unknown modalityExamStatus");
    }
  }, [workingList.modalityExamStatus]);
  return (
    <div className="flex items-center justify-between gap-x-6 py-5">
      <div className="min-w-0 ">
        <div className="flex items-start gap-x-3">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            Appareil : {workingList.modality.modalityPseudo}
          </p>
          <p
            className={classNames(
              "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
            )}>
            {getStatus().status}
          </p>
        </div>
        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p className="whitespace-nowrap">
            Inscrit le{" "}
            {format(parseISO(workingList.createdAt), "dd/MM:yyy mm:ii")}
          </p>
          <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
            <circle cx={1} cy={1} r={1} />
          </svg>
          <p className="truncate">Inscrit par {workingList.user.fullName}</p>
        </div>
      </div>
      <div className="flex flex-none items-center">
        <DisplayExam workingList={workingList} />
        <ToggleLockWorkingList workingList={workingList} />
        <DeleteWorkingListItem workingList={workingList} />
      </div>
    </div>
  );
}

export default WorkingListItem;
