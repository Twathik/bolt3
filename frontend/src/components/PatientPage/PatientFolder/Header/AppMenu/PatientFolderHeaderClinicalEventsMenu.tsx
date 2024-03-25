import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useBoltStore } from "@/stores/boltStore";
import { useCallback } from "react";
import { classNames } from "@/lib/utils";
import { CgScreenMirror } from "react-icons/cg";
import type { PatientsGetOnePatientInfoResponseData } from "@/components/wg-generated/models";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import type { WebsocketMessageInterface } from "@/components/Websockets/interfaces/WebsocketMessageInterface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuid } from "uuid";

function PatientFolderHeaderClinicalEventsMenu({
  patient,
}: {
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
}) {
  const socket = useBoltStore((s) => s.socket);
  const path = usePathname();

  const sendToSecondaryDisplay = useCallback(async () => {
    try {
      if (patient) {
        const message: WebsocketMessageInterface = {
          id: uuid(),
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
      <Link href={`/patient/${patient?.id}/folder`}>
        <Button
          variant="ghost"
          className={classNames(
            "text-white  hover:text-white",
            path.includes("folder")
              ? "bg-amber-400 text-slate-800 hover:bg-amber-400 hover:text-slate-800"
              : "hover:bg-gray-700"
          )}
        >
          Dossier du patient
        </Button>
      </Link>
      <Link href={`/patient/${patient?.id}/document`}>
        <Button
          variant="ghost"
          className={classNames(
            "text-white  hover:text-white",
            path.includes("document")
              ? "bg-amber-400 text-slate-800 hover:bg-amber-400 hover:text-slate-800"
              : "hover:bg-gray-700"
          )}
        >
          Créer un document
        </Button>
      </Link>
      <Button
        variant="link"
        className=""
        onClick={sendToSecondaryDisplay}
        disabled={!socket}
      >
        <span className="text-amber-400 text-2xl flex flex-row align-middle">
          <MdKeyboardDoubleArrowRight />
          <CgScreenMirror />
        </span>
      </Button>
    </NavigationMenuItem>
  );
}

export default PatientFolderHeaderClinicalEventsMenu;
