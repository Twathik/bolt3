import type { ClinicalEventsGetClinicalEventResponseData } from "../generated/models";
import ClinicalDiagnosticRootComponent from "../ClinicalEvents/ClinicalDiagnostic/ClinicalDiagnosticRootComponent";
import PrescriptionRootComponent from "../ClinicalEvents/Prescription/PrescriptionRootComponent";

export const getRootComponent = ({
  clinicalEvent,
}: {
  clinicalEvent: ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"];
}): React.ReactNode => {
  switch (clinicalEvent?.eventType) {
    case "DIAGNOSTIC":
      return <ClinicalDiagnosticRootComponent />;
    case "PRESCRIPTION":
      return <PrescriptionRootComponent />;

    default:
      throw Error("not recognized EventType");
  }
};
