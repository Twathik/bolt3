import {
  mainDb_EventTypes,
  type ClinicalEventsGetClinicalEventsResponseData,
} from "@/components/generated/models";
import RootMenuButton from "./RootMenuButton";

export interface patientFolderBottomMenuElementsInterface {
  button: React.ReactNode;
  eventType: ClinicalEventsGetClinicalEventsResponseData["mainDb_clinicalEvents"][0]["eventType"];
}

export const patientFolderBottomMenuElements = ({
  patientId,
  allowedEventTypes,
}: {
  patientId: string;
  allowedEventTypes: ClinicalEventsGetClinicalEventsResponseData["mainDb_clinicalEvents"][0]["eventType"][];
}): patientFolderBottomMenuElementsInterface[] => {
  const menu: patientFolderBottomMenuElementsInterface[] = [
    {
      eventType: mainDb_EventTypes.CLINICAL_VISIT,
      button: (
        <RootMenuButton
          key="clinical_visit"
          buttonTitle="Dossier Clinique"
          className=""
          errorMessage="Un nouveau diagnostic n'a pas pu être crée!"
          eventType="CLINICAL_VISIT"
          patientId={patientId}
        />
      ),
    },
    {
      eventType: mainDb_EventTypes.PRESCRIPTION,
      button: (
        <RootMenuButton
          key="new_prescription"
          buttonTitle="Ordonnance"
          className=""
          errorMessage="Un nouvelle ordonnace n'a pas pu être crée!"
          eventType="PRESCRIPTION"
          patientId={patientId}
        />
      ),
    },
    {
      eventType: mainDb_EventTypes.GENERAL_SONO,
      button: (
        <RootMenuButton
          key="new_Sono"
          buttonTitle="Echographie"
          className=""
          errorMessage="Une nouvelle echocardiographie n'a pas pu être crée!"
          eventType="GENERAL_SONO"
          patientId={patientId}
        />
      ),
    },
  ].filter((e) => allowedEventTypes.includes(e.eventType));

  return menu;
};
