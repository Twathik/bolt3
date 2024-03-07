import DisplaySecondary from "./DisplaySecondary";
import DisplayPrimary from "./DisplayPrimary";
import LinkExam from "./LinkExam";
import type { WorkingListsWorkingListsResponseData } from "@/components/wg-generated/models";

function DisplayExam({
  workingList,
}: {
  workingList: WorkingListsWorkingListsResponseData["mainDb_workingLists"][0];
}) {
  return workingList.linked ? (
    <>
      <DisplaySecondary workingList={workingList} />
      <DisplayPrimary workingList={workingList} />
    </>
  ) : (
    <LinkExam workingList={workingList} />
  );
}

export default DisplayExam;
