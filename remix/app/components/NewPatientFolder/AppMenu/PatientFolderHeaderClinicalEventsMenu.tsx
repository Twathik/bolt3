import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/ui/components/ui/navigation-menu";
import { useBoltStore } from "@/stores/boltStore";
import { patientFolderBottomMenuElements } from "./MenuElements";
import { useMemo } from "react";

function PatientFolderHeaderClinicalEventsMenu() {
  const patient = useBoltStore((s) => s.patient);
  const consultationState = useBoltStore((s) => s.consultationState);

  const menu = useMemo(
    () =>
      patientFolderBottomMenuElements({
        patientId: patient!.id,
        allowedEventTypes: consultationState.allowedEventTypes.map((e) => e),
      }).map((menu) => menu.button),
    [consultationState.allowedEventTypes, patient]
  );

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-slate-800 text-white hover:bg-slate-800 hover:text-slate-200">
        Creer un document
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        {patient && !patient.onTrash && (
          <ul className="grid w-[400px] gap-3 p-4 ">{menu}</ul>
        )}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default PatientFolderHeaderClinicalEventsMenu;
