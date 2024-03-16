import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useBoltStore } from "@/stores/boltStore";
import { useCallback } from "react";
import { classNames } from "@/lib/utils";
import { CgScreenMirror } from "react-icons/cg";
import type { PatientsGetOnePatientInfoResponseData } from "@/components/wg-generated/models";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import type { WebsocketMessageInterface } from "@/components/Websockets/interfaces/WebsocketMessageInterface";

function PatientFolderHeaderClinicalEventsMenu({
  patient,
}: {
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
}) {
  const patientView = useBoltStore((s) => s.patientView);
  const setPatientView = useBoltStore((s) => s.setPatientView);
  const socket = useBoltStore((s) => s.socket);

  const setFolderView = useCallback(() => {
    setPatientView("folder");
  }, [setPatientView]);
  const setDocumentView = useCallback(() => {
    setPatientView("document");
  }, [setPatientView]);

  const sendToSecondaryDisplay = useCallback(async () => {
    try {
      if (patient) {
        const message: WebsocketMessageInterface = {
          type: "secondaryDisplay",
          payload: { screenType: "patientView", patient },
          global: false,
          subscriptionIds: [],
          destination: ["secondary-display"],
        };
        socket?.sendJsonMessage(message, false);
      }
    } catch (e) {}
  }, [patient, socket]);
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
        disabled={!socket}>
        <span className="text-amber-400 text-2xl flex flex-row align-middle">
          <MdKeyboardDoubleArrowRight />
          <CgScreenMirror />
        </span>
      </Button>
    </NavigationMenuItem>
  );
}

export default PatientFolderHeaderClinicalEventsMenu;
