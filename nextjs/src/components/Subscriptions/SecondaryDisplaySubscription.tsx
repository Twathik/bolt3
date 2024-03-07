import { useEffect } from "react";
import type { AppSubscriptionGlobalSubscriptionResponseData } from "../wg-generated/models";
import { useBoltStore } from "@/stores/boltStore";

function SecondaryDisplaySubscription({
  data,
}: {
  data:
    | AppSubscriptionGlobalSubscriptionResponseData["mainDb_appSubscription"]
    | undefined;
}) {
  const setSecondaryDisplay = useBoltStore(
    (store) => store.setSecondaryDisplay
  );

  useEffect(() => {
    if (data && data.type === "secondaryDisplay") {
      const appPayload = JSON.parse(data.appPayload);
      setSecondaryDisplay(appPayload);
    }
  }, [data, setSecondaryDisplay]);
  return null;
}

export default SecondaryDisplaySubscription;
