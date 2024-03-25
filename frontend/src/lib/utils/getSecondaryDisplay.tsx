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
  const patient = useBoltStore((s) => s.patient);

  switch (secondaryDisplay.screenType) {
    case "mainScreen":
      return <MainSecondaryScreen />;
    case "patientView":
      return patient ? (
        <PatientViewScreen patientId={patient.id} />
      ) : (
        <MainSecondaryScreen />
      );
    default:
      return <div></div>;
  }
}
