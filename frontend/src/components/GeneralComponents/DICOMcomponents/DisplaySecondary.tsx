import { useCallback } from "react";
import type { WorkingListsWorkingListsResponseData } from "@/components/wg-generated/models";
import { Button } from "@/components/ui/button";
import { CgScreenMirror } from "react-icons/cg";
import { useBoltStore } from "@/stores/boltStore";
import { ReadyState } from "react-use-websocket";
import type { WebsocketMessageInterface } from "@/components/Websockets/interfaces/WebsocketMessageInterface";
import { v4 as uuid } from "uuid";

function DisplaySecondary({
  workingList,
}: {
  workingList: WorkingListsWorkingListsResponseData["mainDb_workingLists"][0];
}) {
  const socket = useBoltStore((s) => s.socket);
  const patient = useBoltStore((s) => s.patient);

  const display = useCallback(async () => {
    if (socket && socket.readyState === ReadyState.OPEN && patient) {
      const message: WebsocketMessageInterface = {
        type: "workingList",
        destination: ["patient-Root"],
        global: false,
        id: uuid(),
        subscriptionIds: [patient.id],
        payload: {
          workingList,
          operation: "display",
        },
      };
      socket.sendJsonMessage(message, false);
    }
  }, [patient, socket, workingList]);
  return (
    <Button onClick={display} variant="link">
      <span className="text-2xl">
        <CgScreenMirror />
      </span>
    </Button>
  );
}

export default DisplaySecondary;
