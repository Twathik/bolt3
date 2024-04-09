"use client";
/* eslint-disable react/no-unescaped-entities */

import SubscribeToCopyFolderView from "./subscriptionsHandlers/SubscribeToCopyFolderView";
import SubscribedUsersComponent from "@/components/GeneralComponents/SubscribedUsers/SubscribedUsersComponent";

import { Suspense, lazy } from "react";
import { DotLoader } from "react-spinners";
import type { mainDb_PatientDocumentTypeValues } from "../../../../../wundergraph-server/.wundergraph/generated/models";

const PlateEditorReadOnlyRoot = lazy(
  () =>
    import(
      "@/components/plateEditor/plate-app/readOnlyEditor/PlateEditorReadOnlyRoot"
    )
);

function CopyPatientDocument({
  patientId,
  documentType,
}: {
  patientId: string;
  documentType: mainDb_PatientDocumentTypeValues;
}) {
  return (
    <div>
      <div className="grid grid-col-12 grid-flow-col m-5">
        <div className="col-span-3">
          <SubscribedUsersComponent />
        </div>
        <div className="col-span-9">
          <Suspense
            fallback={
              <div className="w-full h-1/2 flex justify-center mt-20">
                <DotLoader />
              </div>
            }
          >
            <PlateEditorReadOnlyRoot
              documentName={`${patientId}-${documentType}`}
            />
          </Suspense>
        </div>
      </div>

      <SubscribeToCopyFolderView patientId={patientId} />
    </div>
  );
}

export default CopyPatientDocument;
