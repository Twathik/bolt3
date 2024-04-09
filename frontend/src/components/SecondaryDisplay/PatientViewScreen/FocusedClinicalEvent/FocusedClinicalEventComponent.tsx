"use client";
import { useBoltStore } from "@/stores/boltStore";
import React, { useMemo } from "react";
import BiologyEventComponent from "./ClinicalEvents/BiologyEventComponent";
import CertificatEventComponent from "./ClinicalEvents/CertificatEventComponent";
import ClinicalExamEventComponent from "./ClinicalEvents/ClinicalExamEventComponent";
import DiagnosticEventComponent from "./ClinicalEvents/DiagnosticEventComponent";
import ECGEventComponent from "./ClinicalEvents/ECGEventComponent";
import HistoryEventComponent from "./ClinicalEvents/HistoryEventComponent";
import MedicalReportEventComponent from "./ClinicalEvents/MedicalReportEventComponent";
import PrescriptionEventRootComponent from "./ClinicalEvents/PrescriptionEvent/PrescriptionEventRootComponent";
import SubscribeToFocusedClinicalEventView from "../subscriptionsHandlers/SubscribeToFocusedClinicalEventView";
import SonographyEventRootComponent from "./ClinicalEvents/SonographyEvent/SonographyEventRootComponent";

function FocusedClinicalEventComponent() {
  const focusedClinicalEvent = useBoltStore((s) => s.focusedClinicalEvent);
  const patient = useBoltStore((s) => s.patient);

  const event = useMemo(() => {
    if (patient) {
      switch (focusedClinicalEvent?.eventType) {
        case "BIOLOGY":
          return <BiologyEventComponent patient={patient} />;
        case "CERTIFICAT":
          return <CertificatEventComponent patient={patient} />;
        case "CLINICALEXAM":
          return <ClinicalExamEventComponent patient={patient} />;
        case "DIAGNOSTIC":
          return <DiagnosticEventComponent patient={patient} />;
        case "ECG":
          return <ECGEventComponent patient={patient} />;
        case "HISTORY":
          return <HistoryEventComponent patient={patient} />;
        case "MEDICAL_REPORT":
          return <MedicalReportEventComponent patient={patient} />;
        case "PRESCRIPTION":
          return <PrescriptionEventRootComponent patient={patient} />;
        case "SONOGRAPHY":
          return <SonographyEventRootComponent patient={patient} />;

        default:
          return (
            <div>
              <SubscribeToFocusedClinicalEventView patientId={patient.id} />
            </div>
          );
      }
    }
    return <div>No patient</div>;
  }, [focusedClinicalEvent?.eventType, patient]);
  return event;
}

export default FocusedClinicalEventComponent;
