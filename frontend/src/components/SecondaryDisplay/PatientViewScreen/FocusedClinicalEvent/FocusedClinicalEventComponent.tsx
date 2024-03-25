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
import PrescriptionEventComponent from "./ClinicalEvents/PrescriptionEventComponent";
import SonographyEventComponent from "./ClinicalEvents/SonographyEventComponent";

function FocusedClinicalEventComponent() {
  const focusedClinicalEvent = useBoltStore((s) => s.focusedClinicalEvent);

  const event = useMemo(() => {
    switch (focusedClinicalEvent?.eventType) {
      case "BIOLOGY":
        return <BiologyEventComponent />;
      case "CERTIFICAT":
        return <CertificatEventComponent />;
      case "CLINICALEXAM":
        return <ClinicalExamEventComponent />;
      case "DIAGNOSTIC":
        return <DiagnosticEventComponent />;
      case "ECG":
        return <ECGEventComponent />;
      case "HISTORY":
        return <HistoryEventComponent />;
      case "MEDICAL_REPORT":
        return <MedicalReportEventComponent />;
      case "PRESCRIPTION":
        return <PrescriptionEventComponent />;
      case "SONOGRAPHY":
        return <SonographyEventComponent />;

      default:
        return <div></div>;
    }
  }, [focusedClinicalEvent]);
  return event;
}

export default FocusedClinicalEventComponent;
