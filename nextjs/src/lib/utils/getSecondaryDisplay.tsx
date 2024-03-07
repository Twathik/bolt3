import type { ReactNode } from "react";
import MainSecondaryScreen from "../../components/SecondaryDisplay/MainSecondaryScreen";
import type { SecondaryDisplayInterface } from "@/lib/interfaces/GlobalSubscriptionInterfaces";
import PatientViewScreen from "@/components/SecondaryDisplay/PatientViewScreen/PatientViewScreen";

export const getSelectedDisplay = ({
  secondaryDisplay,
}: {
  secondaryDisplay: SecondaryDisplayInterface;
}): ReactNode => {
  switch (secondaryDisplay.displayType) {
    case "main":
      return <MainSecondaryScreen />;
    case "patientView":
      return <PatientViewScreen payload={secondaryDisplay} />;
    default:
      break;
  }
};
