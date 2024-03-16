import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import PatientFolderHeaderClinicalEventsMenu from "./PatientFolderHeaderClinicalEventsMenu";
import { useBoltStore } from "@/stores/boltStore";
import { useEffect, useState } from "react";
import type { PatientsGetOnePatientInfoResponseData } from "@/components/wg-generated/models";

export function PatientFolderNavigationMenu({
  patient,
}: {
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
}) {
  const patientSpotlights = useBoltStore((s) => s.patientSpotlights);
  const [inConsultation, setInConsultation] = useState(false);

  useEffect(() => {
    if (patient) {
      console.log({ patientSpotlights });
      const checkIndex = patientSpotlights.findIndex(
        (p) => p.patientId === patient.id
      );
      setInConsultation(checkIndex !== -1);
    }
  }, [patient, patientSpotlights]);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {patient && <PatientFolderHeaderClinicalEventsMenu patient={patient} />}
        {inConsultation && <span>Consultation Menu</span>}
        <NavigationMenuItem></NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
