import type { ReactNode } from "react";
import MainSecondaryScreen from "./MainSecondaryScreen";
import DICOMscreen from "./DICOMscreen";
import type { SecondaryDisplayInterface } from "@/lib/interfaces/GlobalSubscriptionInterfaces";

export const getSelectedDisplay = ({
  secondaryDisplay,
}: {
  secondaryDisplay: SecondaryDisplayInterface;
}): ReactNode => {
  switch (secondaryDisplay.displayType) {
    case "main":
      return <MainSecondaryScreen />;
    case "dicom":
      return <DICOMscreen payload={secondaryDisplay} />;
    default:
      break;
  }
};
