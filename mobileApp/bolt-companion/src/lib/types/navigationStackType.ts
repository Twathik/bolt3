import { PatientScannedDocumentsGetPatientScannedDocumentsResponseData } from "@/generated/models";
import { ConsultationPatient } from "../stores/mobileBoltStoresType";

export type BoltNavigationStackType = {
  Search: undefined;
  Home: undefined;
  PatientFolder: { patient: ConsultationPatient | null };
  ScanDocument: { patient: ConsultationPatient | null };
  ScanPatientDocument: { patient: ConsultationPatient | null };
  ScannedPatientDocumentsPage: {
    doc: PatientScannedDocumentsGetPatientScannedDocumentsResponseData["mainDb_patientScannedDocuments"][0];
    patient: ConsultationPatient | null;
  };
};
