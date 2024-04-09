/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Iframe from "react-iframe";
import { orthancViewerBaseUrl } from "@/lib/utils/OrthancUtils";
import { useBoltStore } from "@/stores/boltStore";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

function DICOMview() {
  const focusedWorkingList = useBoltStore((s) => s.focusedWorkingList);
  if (!focusedWorkingList)
    return (
      <div className="flex flex-row justify-center items-center m-36">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Attention !</AlertTitle>
          <AlertDescription>
            Veuillez selectionner un examen d'imagerie á afficher
          </AlertDescription>
        </Alert>
      </div>
    );

  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <Iframe
          url={orthancViewerBaseUrl + focusedWorkingList.linkId}
          id="dcm-viewer"
          className="w-[90vw] h-[85vh] rounded-lg shadow-xl"
          display="block"
          position="relative"
        />
      </div>
    </div>
  );
}

export default DICOMview;
