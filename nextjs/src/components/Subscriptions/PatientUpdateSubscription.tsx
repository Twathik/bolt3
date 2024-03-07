import { useEffect } from "react";
import type { AppSubscriptionGlobalSubscriptionResponseData } from "../wg-generated/models";
import { useBoltStore } from "@/stores/boltStore";
import type { operationTypes } from "./operationTypes";

function PatientUpdateSubscription({
  data,
}: {
  data:
    | AppSubscriptionGlobalSubscriptionResponseData["mainDb_appSubscription"]
    | undefined;
}) {
  const setPatient = useBoltStore((store) => store.setPatient);
  useEffect(() => {
    if (data && data.type === "patientUpdate") {
      const appPayload = JSON.parse(data.appPayload);
      switch (appPayload.operation as operationTypes) {
        case "update":
          setPatient(appPayload.patient);
          break;
        default:
          break;
      }
    }
  }, [data, setPatient]);
  return null;
}

export default PatientUpdateSubscription;
