import { useEffect } from "react";
import type { AppSubscriptionGlobalSubscriptionResponseData } from "../wg-generated/models";
import type { operationTypes } from "./operationTypes";
import { useBoltStore } from "@/stores/boltStore";

function WorkingListUpdateSubscription({
  data,
}: {
  data:
    | AppSubscriptionGlobalSubscriptionResponseData["mainDb_appSubscription"]
    | undefined;
}) {
  const addWorkingList = useBoltStore((store) => store.addWorkingList);
  const updateWorkingList = useBoltStore((store) => store.updateWorkingList);
  const removeWorkingList = useBoltStore((store) => store.removeWorkingList);
  useEffect(() => {
    if (data && data.type === "workingLists") {
      const appPayload = JSON.parse(data.appPayload);
      switch (appPayload.operation as operationTypes) {
        case "create":
          addWorkingList(appPayload.workingList);
          break;
        case "update":
          updateWorkingList(appPayload.workingList);
          break;
        case "delete":
          removeWorkingList(appPayload.workingList);
          break;

        default:
          break;
      }
    }
  }, [addWorkingList, data, removeWorkingList, updateWorkingList]);
  return null;
}

export default WorkingListUpdateSubscription;
