import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import type { WebsocketMessageInterface } from "../../interfaces/WebsocketMessageInterface";

function MobileDevicesSubscription({
  message,
}: {
  message: WebsocketMessageInterface;
}) {
  const addMobileDevice = useBoltStore((store) => store.addMobileDevice);
  const updateMobileDevice = useBoltStore((store) => store.updateMobileDevice);
  const removeMobileDevice = useBoltStore((store) => store.removeMobileDevice);
  useEffect(() => {
    if (message.type === "mobileDevice") {
      switch (message.payload.operation) {
        case "create":
          addMobileDevice(message.payload.mobileDevice);
          break;
        case "update":
          updateMobileDevice(message.payload.mobileDevice);
          break;
        case "delete":
          removeMobileDevice(message.payload.mobileDevice);
          break;

        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.id]);
  return null;
}

export default MobileDevicesSubscription;
