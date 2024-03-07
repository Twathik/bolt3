import { useEffect } from "react";
import type { AppSubscriptionGlobalSubscriptionResponseData } from "../wg-generated/models";
import { useBoltStore } from "@/stores/boltStore";
import type { operationTypes } from "./operationTypes";
import type { PatientSpotlight } from "@/stores/boltStoreType";
import { format, parseISO } from "date-fns";

function ConsultationListSubscription({
  data,
}: {
  data:
    | AppSubscriptionGlobalSubscriptionResponseData["mainDb_appSubscription"]
    | undefined;
}) {
  const addPatientSpotlight = useBoltStore(
    (store) => store.addPatientSpotlight
  );
  const updatePatientSpotlight = useBoltStore(
    (store) => store.updatePatientSpotlight
  );
  const removePatientSpotlight = useBoltStore(
    (store) => store.removePatientSpotlight
  );

  const updateDisplayedList = useBoltStore((store) => store.setDisplayedList);
  useEffect(() => {
    if (data && data.type === "consultationLists") {
      const appPayload = JSON.parse(data.appPayload);
      const payload: PatientSpotlight = {
        consultationList: appPayload.consultationList,
        patientId: appPayload.consultationList.patient.id,
        id: appPayload.consultationList.id,
        label: `${appPayload.consultationList.patient.lastName} ${appPayload.consultationList.patient.firstName}`,
        description: `DDN : ${format(
          parseISO(appPayload.consultationList.patient.ddn),
          "dd-MM-yyyy"
        )} - sexe: ${
          appPayload.consultationList.patient.sexe === "F" ? "Femme" : "Homme"
        }`,
      };

      switch (appPayload.operation as operationTypes) {
        case "create":
          addPatientSpotlight(payload);
          break;
        case "update":
          updatePatientSpotlight(payload);
          break;
        case "delete":
          removePatientSpotlight(payload);
          break;

        default:
          break;
      }
      updateDisplayedList(5);
    }
  }, [
    addPatientSpotlight,
    data,
    removePatientSpotlight,
    updateDisplayedList,
    updatePatientSpotlight,
  ]);
  return null;
}

export default ConsultationListSubscription;
