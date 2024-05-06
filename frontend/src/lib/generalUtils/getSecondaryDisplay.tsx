import type { ReactNode } from "react";
import MainSecondaryScreen from "../../components/SecondaryDisplay/MainSecondaryScreen";
import PatientViewScreen from "@/components/SecondaryDisplay/PatientViewScreen";
import { useBoltStore } from "@/stores/boltStore";
import type { SecondaryDisplayMessagePayload } from "@/components/Websockets/interfaces/MessagesTypes/SecondaryDisplayMessageInterface";

export default function GetSelectedDisplay({
  secondaryDisplay,
}: {
  secondaryDisplay: SecondaryDisplayMessagePayload;
}): ReactNode {
  const patient = useBoltStore((s) => s.patient);
  const PatientTab = useBoltStore((s) => s.patientTab);

  switch (secondaryDisplay.screenType) {
    case "mainScreen":
      return <MainSecondaryScreen />;
    case "patientView":
      return patient ? (
        <PatientViewScreen patientId={patient.id} patientTab={PatientTab} />
      ) : (
        <MainSecondaryScreen />
      );
    default:
      return <div></div>;
  }
}
