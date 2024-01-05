import type { ClinicalEventsGetClinicalEventResponseData } from "@/components/generated/models";
import type { ReactNode } from "react";
import EconomizersIndex from "./Economizers/EconomizersIndex";
import WidgetsIndex from "./Widgets/WidgetsIndex";
import DicomIndex from "./Dicoms/DicomIndex";

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
        widget: <WidgetsIndex />,
        economizer: <EconomizersIndex />,
        dicom: <DicomIndex />,
      };

    case "DIAGNOSTIC":
      return {
        widget: <WidgetsIndex />,
        economizer: <EconomizersIndex />,
        dicom: <DicomIndex notApplicable />,
      };
    default:
      throw Error(
        "Not recognized clinicalEvent Type, lateral panel could not be generated"
      );
  }
};
