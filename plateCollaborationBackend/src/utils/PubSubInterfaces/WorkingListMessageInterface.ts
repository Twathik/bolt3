import type { WorkingListsWorkingListsResponseData } from "@/components/wg-generated/models";
import type { RootMessageInterface } from "./MessageTypesInterface";

type WorkingListMessagePayloadOperationType = "update" | "create" | "delete";

interface RootWorkingListMessagePayload {
  operation: WorkingListMessagePayloadOperationType;
}

interface WorkingListUpdateMessagePayload
  extends RootWorkingListMessagePayload {
  workingList: WorkingListsWorkingListsResponseData["mainDb_workingLists"][0];
}

type WorkingListMessagePayload = WorkingListUpdateMessagePayload;

export interface WorkingListMessageInterface extends RootMessageInterface {
  type: "workingList";
  payload: WorkingListMessagePayload;
}
