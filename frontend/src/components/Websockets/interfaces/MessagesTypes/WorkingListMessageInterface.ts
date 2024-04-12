import type {
  RootMessageInterface,
  WorkingList,
} from "../MessageTypesInterface";

type WorkingListMessagePayloadOperationType =
  | "update"
  | "create"
  | "delete"
  | "display";

interface RootWorkingListMessagePayload {
  operation: WorkingListMessagePayloadOperationType;
}

interface WorkingListUpdateMessagePayload
  extends RootWorkingListMessagePayload {
  workingList: WorkingList;
}

type WorkingListMessagePayload = WorkingListUpdateMessagePayload;

export interface WorkingListMessageInterface extends RootMessageInterface {
  type: "workingList";
  payload: WorkingListMessagePayload;
}
