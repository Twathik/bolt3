import { useEffect } from "react";
import type { AppSubscriptionGlobalSubscriptionResponseData } from "../wg-generated/models";
import { useBoltStore } from "@/stores/boltStore";
import type { operationTypes } from "./operationTypes";

function MobileDevicesUpdateSubscription({
  data,
}: {
  data:
    | AppSubscriptionGlobalSubscriptionResponseData["mainDb_appSubscription"]
    | undefined;
}) {
  const addMobileDevice = useBoltStore((store) => store.addMobileDevice);
  const updateMobileDevice = useBoltStore((store) => store.updateMobileDevice);
  const removeMobileDevice = useBoltStore((store) => store.removeMobileDevice);
  useEffect(() => {
    if (data && data.type === "mobileDeviceUpdate") {
      const appPayload = JSON.parse(data.appPayload);
      switch (appPayload.operation as operationTypes) {
        case "create":
          addMobileDevice(appPayload.mobileDevice);
          break;
        case "update":
          updateMobileDevice(appPayload.mobileDevice);
          break;
        case "delete":
          removeMobileDevice(appPayload.mobileDevice);
          break;

        default:
          break;
      }
    }
  }, [addMobileDevice, data, removeMobileDevice, updateMobileDevice]);
  return null;
}

export default MobileDevicesUpdateSubscription;
