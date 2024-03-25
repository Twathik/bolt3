"use client";
/* eslint-disable react/no-unescaped-entities */
import { useBoltStore } from "@/stores/boltStore";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons";
import { BoltFolderMenuButtons } from "./BoltMenuButtons/FolderMenuButtons";
import { lazy } from "react";
import type { PatientDocumentType } from "@/lib/interfaces/DocumentTypes";
import { DocumentMenuButtons } from "./BoltMenuButtons/DocumentMenuButtons";

const PlateEditorRoot = lazy(
  () => import("@/components/plateEditor/PlateEditorRoot")
);

function PatientBodyEditor({
  patientId,
  documentType,
}: {
  patientId: string;
  documentType: PatientDocumentType;
}) {
  const patient = useBoltStore((store) => store.patient);

  return patient?.onTrash ? (
    <div className="col-span-2 m-auto flex items-center justify-center align-middle text-rose-800">
      Ce dossier n'est plus disponible, veuillez le retirer de la corbeille si
      vous souhaiter y apporter des modifications
    </div>
  ) : (
    patient && (
      <PlateEditorRoot
        documentName={`${patient?.id}-${documentType}`}
        patientId={patientId}
      >
        <>
          <FixedToolbar>
            <FixedToolbarButtons
              boltMenu={
                documentType === "folder"
                  ? BoltFolderMenuButtons
                  : DocumentMenuButtons
              }
            />
          </FixedToolbar>
        </>
      </PlateEditorRoot>
    )
  );
}

export default PatientBodyEditor;