import { useEffect } from "react";
import type { AppSubscriptionGlobalSubscriptionResponseData } from "../wg-generated/models";
import { useBoltStore } from "@/stores/boltStore";

function ModalityUpdateSubscription({
  data,
}: {
  data:
    | AppSubscriptionGlobalSubscriptionResponseData["mainDb_appSubscription"]
    | undefined;
}) {
  const updateModality = useBoltStore((store) => store.updateModalities);
  useEffect(() => {
    if (data && data.type === "modalityUpdate") {
      const appPayload = JSON.parse(data.appPayload);
      updateModality(appPayload);
    }
  }, [data, updateModality]);
  return null;
}

export default ModalityUpdateSubscription;
