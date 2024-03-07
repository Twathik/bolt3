import { NavigationMenuItem } from "@/ui/components/ui/navigation-menu";

import { Button } from "@/ui/components/ui/button";
import { useBoltStore } from "@/stores/boltStore";
import { useCallback } from "react";
import { classNames } from "@/lib/utils";

function PatientFolderHeaderClinicalEventsMenu() {
  const patientView = useBoltStore((s) => s.patientView);
  const setPatientView = useBoltStore((s) => s.setPatientView);
  const setFolderView = useCallback(() => {
    setPatientView("folder");
  }, [setPatientView]);
  const setDocumentView = useCallback(() => {
    setPatientView("document");
  }, [setPatientView]);
  return (
    <NavigationMenuItem className="flex flex-row gap-x-4">
      <Button
        onClick={setFolderView}
        variant="ghost"
        className={classNames(
          "text-white  hover:text-white",
          patientView === "folder"
            ? "bg-gray-600 hover:bg-gray-600"
            : "hover:bg-gray-700"
        )}>
        Dossier du patient
      </Button>
      <Button
        onClick={setDocumentView}
        variant="ghost"
        className={classNames(
          "text-white  hover:text-white",
          patientView === "document"
            ? "bg-gray-600 hover:bg-gray-600"
            : "hover:bg-gray-700"
        )}>
        Créer un document
      </Button>
    </NavigationMenuItem>
  );
}

export default PatientFolderHeaderClinicalEventsMenu;
