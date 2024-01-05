import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/ui/components/ui/navigation-menu";

import PatientFolderHeaderClinicalEventsMenu from "./PatientFolderHeaderClinicalEventsMenu";
import PatientFolderHeaderConsultation from "./PatientFolderHeaderConsultation";
import { useBoltStore } from "@/stores/boltStore";
import { useEffect, useState } from "react";

export function PatientFolderNavigationMenu() {
  const patient = useBoltStore((s) => s.patient);
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
        {patient && <PatientFolderHeaderClinicalEventsMenu />}
        {inConsultation && <PatientFolderHeaderConsultation />}
        <NavigationMenuItem>
          {/* <Link to="/docs">
            <NavigationMenuLink
              className={classNames(
                navigationMenuTriggerStyle(),
                "bg-slate-800 text-white hover:bg-slate-800 hover:text-slate-200 focus:bg-slate-800"
              )}>
              Documentation
            </NavigationMenuLink>
          </Link> */}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
