import type { PatientsGetOnePatientInfoResponseData } from "@/components/wg-generated/models";
import { useBoltStore } from "@/stores/boltStore";
import React from "react";
import SonographyEventComponent from "./SonographyEventComponent";
import CommandPanel from "../Common/CommandPanel";

function SonographyEventRootComponent({
  patient,
}: {
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
}) {
  const focusedClinicalEvent = useBoltStore((s) => s.focusedClinicalEvent);

  return (
    <div>
      <div className="flex p-4">
        <div className="w-1/4">
          <CommandPanel
            sheetTitle={`ETT du ${focusedClinicalEvent?.createdAt} -- Patient :${patient?.patientFullName}`}
            panelTitle={`ETT du ${focusedClinicalEvent?.createdAt}`}
            documentType="folder"
            size="A4"
          />
        </div>
        <div className="w-3/4 shadow-xl border-[1px] border-slate-400 rounded-xl">
          <SonographyEventComponent />
        </div>
      </div>
    </div>
  );
}

export default SonographyEventRootComponent;
