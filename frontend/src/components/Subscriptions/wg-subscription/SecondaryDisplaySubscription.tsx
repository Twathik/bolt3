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
  const setPatient = useBoltStore((s) => s.setPatient);

  useEffect(() => {
    if (data && data.type === "secondaryDisplay") {
      const appPayload = JSON.parse(data.appPayload);
      setSecondaryDisplay(appPayload);
    }
  }, [data, setPatient, setSecondaryDisplay]);
  return null;
}

export default SecondaryDisplaySubscription;
