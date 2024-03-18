import type { ReactNode } from "react";
import MainSecondaryScreen from "../../components/SecondaryDisplay/MainSecondaryScreen";
import PatientViewScreen from "@/components/SecondaryDisplay/PatientViewScreen";
import { useBoltStore } from "@/stores/boltStore";
import type { SecondaryDisplayMessagePayload } from "@/components/Websockets/interfaces/SecondaryDisplayMessageInterface";

export default function GetSelectedDisplay({
  secondaryDisplay,
}: {
  secondaryDisplay: SecondaryDisplayMessagePayload;
}): ReactNode {
  const focusedPatientId = useBoltStore((s) => s.focusedPatientId);
  switch (secondaryDisplay.screenType) {
    case "mainScreen":
      return <MainSecondaryScreen />;
    case "patientView":
      return <PatientViewScreen focusedPatientId={focusedPatientId} />;
    default:
      return <div></div>;
      break;
  }
}
