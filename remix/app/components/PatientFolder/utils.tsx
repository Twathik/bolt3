import type { ClinicalEventsGetClinicalEventResponseData } from "../generated/models";
import ClinicalDiagnosticRootComponent from "../ClinicalEvents/ClinicalDiagnostic/ClinicalDiagnosticRootComponent";
import PrescriptionRootComponent from "../ClinicalEvents/Prescription/PrescriptionRootComponent";
import SonoRootComponent from "../ClinicalEvents/Sonography/SonoRootComponent";

export const getEditorRootComponent = ({
  clinicalEvent,
}: {
  clinicalEvent: ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"];
}): React.ReactNode => {
  switch (clinicalEvent?.eventType) {
    case "DIAGNOSTIC":
      return <ClinicalDiagnosticRootComponent clinicalEvent={clinicalEvent} />;
    case "PRESCRIPTION":
      return <PrescriptionRootComponent clinicalEvent={clinicalEvent} />;
    case "GENERAL_SONO":
      return <SonoRootComponent clinicalEvent={clinicalEvent} />;

    default:
      throw Error("not recognized EventType");
  }
};
