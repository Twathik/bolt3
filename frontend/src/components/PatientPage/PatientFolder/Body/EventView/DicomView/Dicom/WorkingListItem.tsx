import { format, parseISO } from "date-fns";
import { useCallback } from "react";
import ToggleLockWorkingList from "./ToggleLockWorkingList";
import DeleteWorkingListItem from "./DeleteWorkingListItem";
import type { WorkingListsWorkingListsResponseData } from "@/components/wg-generated/models";
import { classNames } from "@/lib/utils";
import DisplayExam from "@/components/GeneralComponents/DICOMcomponents/DisplayExam";

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
    <div className="flex items-center justify-between gap-x-6 py-5 border-b-2 ">
      <div className="min-w-0 ">
        <div className="flex items-start gap-x-3">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            <div className="font-bold">Appareil :</div>
            <div>{workingList.modality.modalityPseudo}</div>
          </p>
          <p
            className={classNames(
              "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
            )}
          >
            {getStatus().status}
          </p>
        </div>
        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p className="whitespace-nowrap">
            <div className="font-bold">Inscrit le : </div>
            <div>
              {format(parseISO(workingList.createdAt), "dd/MM:yyy mm:ii")}
            </div>
          </p>

          <p>
            <div className="font-bold">Inscrit par</div>{" "}
            <div> {workingList.user.fullName}</div>
          </p>
        </div>
      </div>
      <div className="flex flex-none items-center">
        <DisplayExam workingList={workingList} />
        <ToggleLockWorkingList workingList={workingList} />
        {!workingList.linked && (
          <DeleteWorkingListItem workingList={workingList} />
        )}
      </div>
    </div>
  );
}

export default WorkingListItem;
