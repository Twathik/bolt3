import SonoDicom from "@/components/ClinicalEvents/Sonography/SonoLateralPanel/SonoDicom";
import SonoEconomizers from "@/components/ClinicalEvents/Sonography/SonoLateralPanel/SonoEconomizers";
import SonoWidgets from "@/components/ClinicalEvents/Sonography/SonoLateralPanel/SonoWidgets";
import type { ClinicalEventsGetClinicalEventResponseData } from "@/components/generated/models";
import type { ReactNode } from "react";

type generatedLateralPanelWidgets = {
  widget: ReactNode;
  economizer: ReactNode;
  dicom: ReactNode;
};

export const getLateralPanelCardWidgets = ({
  clinicalEvent,
}: {
  clinicalEvent: ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"];
}): generatedLateralPanelWidgets => {
  switch (clinicalEvent?.eventType) {
    case "GENERAL_SONO":
      return {
        widget: <SonoWidgets />,
        economizer: <SonoEconomizers />,
        dicom: <SonoDicom />,
      };

    default:
      throw Error(
        "Not recognized clinicalEvent Type, lateral panel could not be generated"
      );
  }
};
