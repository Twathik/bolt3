import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import type { WebsocketMessageInterface } from "../../interfaces/WebsocketMessageInterface";

function WorkingListSubscription({
  message,
}: {
  message: WebsocketMessageInterface;
}) {
  const addWorkingList = useBoltStore((store) => store.addWorkingList);
  const updateWorkingList = useBoltStore((store) => store.updateWorkingList);
  const removeWorkingList = useBoltStore((store) => store.removeWorkingList);
  const setFocusedWorkingList = useBoltStore((s) => s.setFocusedWorkingList);

  useEffect(() => {
    if (message.type === "workingList") {
      switch (message.payload.operation) {
        case "create":
          addWorkingList(message.payload.workingList);
          break;
        case "update":
          updateWorkingList(message.payload.workingList);
          break;
        case "delete":
          removeWorkingList(message.payload.workingList);
          break;
        case "display":
          console.log({ message });
          setFocusedWorkingList(message.payload.workingList);

          break;

        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.id]);
  return null;
}

export default WorkingListSubscription;
