"use client";
/* eslint-disable react/no-unescaped-entities */
import { useBoltStore } from "@/stores/boltStore";
import { DotLoader } from "react-spinners";
import { Suspense, lazy, useMemo } from "react";
import type { Value } from "@udecode/plate-common";

const ReadOnlyPlateEditor = lazy(
  () => import("@/components/plateEditor/ReadOnlyPlateEditor")
);

function CopyFolderComponent() {
  const patient = useBoltStore((store) => store.patient);

  const initialValue: Value = useMemo(
    () =>
      patient?.clinicalData
        ? JSON.parse(patient.clinicalData)
        : [{ type: "p", children: [{ text: "" }] }],

    [patient]
  );

  return patient?.onTrash ? (
    <div className="col-span-2 m-auto flex items-center justify-center align-middle text-rose-800">
      Ce dossier n'est plus disponible, veuillez le retirer de la corbeille si
      vous souhaiter y apporter des modifications
    </div>
  ) : (
    <>
      <Suspense
        fallback={
          <div className="w-full h-1/2 flex justify-center mt-20">
            <DotLoader />
          </div>
        }>
        <ReadOnlyPlateEditor initialValue={initialValue} />
      </Suspense>
    </>
  );
}

export default CopyFolderComponent;
