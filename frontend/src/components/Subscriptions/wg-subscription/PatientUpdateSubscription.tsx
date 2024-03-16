import { useEffect } from "react";
import type { AppSubscriptionGlobalSubscriptionResponseData } from "../wg-generated/models";
import { useBoltStore } from "@/stores/boltStore";
import type { operationTypes } from "./operationTypes";
import { v4 as uuid } from "uuid";

function PatientUpdateSubscription({
  data,
}: {
  data:
    | AppSubscriptionGlobalSubscriptionResponseData["mainDb_appSubscription"]
    | undefined;
}) {
  const setPatient = useBoltStore((store) => store.setPatient);
  const setDocumentVersion = useBoltStore((s) => s.setDocumentVersion);
  const setFocusedPatientId = useBoltStore((s) => s.setFocusedPatientId);
  useEffect(() => {
    if (data && data.type === "patientUpdate") {
      const appPayload = JSON.parse(data.appPayload);

      switch (appPayload.operation as operationTypes) {
        case "update":
          setPatient(appPayload.patient);
          break;
        case "update-document":
          setDocumentVersion(uuid());
          break;
        case "set-focused-id":
          console.log({ payload: appPayload.payload });
          setFocusedPatientId(appPayload.payload);
          break;

        default:
          break;
      }
    }
  }, [data, setDocumentVersion, setFocusedPatientId, setPatient]);
  return null;
}

export default PatientUpdateSubscription;
