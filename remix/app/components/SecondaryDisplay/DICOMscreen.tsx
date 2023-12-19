import React from "react";
import type { WorkingListsWorkingListsResponseData } from "../generated/models";
import Iframe from "react-iframe";
import { orthancViewerBaseUrl } from "../GeneralComponents/DICOMcomponents/utils";
import type { SecondaryDisplayInterface } from "@/lib/interfaces/GlobalSubscriptionInterfaces";

function DICOMscreen({ payload }: { payload: SecondaryDisplayInterface }) {
  const workingList = JSON.parse(
    payload.payload
  ) as WorkingListsWorkingListsResponseData["mainDb_workingLists"][0];

  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <div className="underline font-bold mt-5 text-2xl">
          Examen de {workingList.patient.patientFullName}
        </div>
        <Iframe
          url={orthancViewerBaseUrl + payload.id}
          id="dcm-viewer"
          className="w-full h-[90vh] mt-5"
          display="block"
          position="relative"
        />
      </div>
    </div>
  );
}

export default DICOMscreen;
