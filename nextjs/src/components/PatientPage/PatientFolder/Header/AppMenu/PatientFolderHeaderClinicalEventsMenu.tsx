import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useBoltStore } from "@/stores/boltStore";
import { useCallback } from "react";
import { classNames } from "@/lib/utils";
import { CgScreenMirror } from "react-icons/cg";
import { useMutation } from "@/components/wg-generated/nextjs";
import { useToast } from "@/components/ui/use-toast";
import type { PatientsGetOnePatientResponseData } from "@/components/wg-generated/models";
import type { SecondaryDisplayInterface } from "@/lib/interfaces/GlobalSubscriptionInterfaces";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function PatientFolderHeaderClinicalEventsMenu({
  patient,
}: {
  patient: PatientsGetOnePatientResponseData["mainDb_getPatient"];
}) {
  const patientView = useBoltStore((s) => s.patientView);
  const setPatientView = useBoltStore((s) => s.setPatientView);
  const { toast } = useToast();
  const { trigger, isMutating } = useMutation({
    operationName: "AppSubscription/triggerAppSubscription",
    onError: () => {
      toast({
        title: "erreur réseau",
        description: "L'ecran secondaire n'a pas pu être synchronisé",
        variant: "destructive",
      });
    },
  });
  const setFolderView = useCallback(() => {
    setPatientView("folder");
  }, [setPatientView]);
  const setDocumentView = useCallback(() => {
    setPatientView("document");
  }, [setPatientView]);

  const sendToSecondaryDisplay = useCallback(async () => {
    try {
      const appPayload: SecondaryDisplayInterface = {
        displayType: "patientView",
        payload: JSON.stringify(patient),
        id: "",
      };
      await trigger({
        appType: "secondaryDisplay",
        appPayload: JSON.stringify(appPayload),
        global: false,
      });
    } catch (e) {}
  }, [patient, trigger]);
  return (
    <NavigationMenuItem className="flex flex-row gap-x-4">
      <Button
        onClick={setFolderView}
        variant="ghost"
        className={classNames(
          "text-white  hover:text-white",
          patientView === "folder"
            ? "bg-amber-400 text-slate-800 hover:bg-amber-400 hover:text-slate-800"
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
            ? "bg-amber-400 text-slate-800 hover:bg-amber-400 hover:text-slate-800"
            : "hover:bg-gray-700"
        )}>
        Créer un document
      </Button>
      <Button
        variant="link"
        className=""
        onClick={sendToSecondaryDisplay}
        disabled={isMutating}>
        <span className="text-amber-400 text-2xl flex flex-row align-middle">
          <MdKeyboardDoubleArrowRight />
          <CgScreenMirror />
        </span>
      </Button>
    </NavigationMenuItem>
  );
}

export default PatientFolderHeaderClinicalEventsMenu;
