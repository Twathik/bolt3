"use client";
import React, { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import PatientFolderHeader from "./PatientViewScreen/PatientFolderHeader";
import PatientInformationComponent from "./PatientViewScreen/PatientInformationComponent";
import FocusedClinicalEventRootComponent from "./PatientViewScreen/FocusedClinicalEventRootComponent";
import CopyPatientDocument from "./PatientViewScreen/CopyPatientDocument";

function PatientViewScreen({ patientId }: { patientId: string }) {
  const tabs = useMemo(
    () => (
      <Tabs defaultValue="informations" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="informations">Informations</TabsTrigger>
          <TabsTrigger value="focusedDocument">Document en cours</TabsTrigger>
          <TabsTrigger value="copyFolder">Replicat du dossier</TabsTrigger>
          <TabsTrigger value="copyDocuments">
            Replicat des documents
          </TabsTrigger>
        </TabsList>
        <TabsContent value="informations">
          <PatientInformationComponent patientId={patientId} />
        </TabsContent>
        <TabsContent value="focusedDocument">
          <FocusedClinicalEventRootComponent patientId={patientId} />
        </TabsContent>
        <TabsContent value="copyFolder">
          <CopyPatientDocument patientId={patientId} documentType="folder" />
        </TabsContent>
        <TabsContent value="copyDocuments">
          <CopyPatientDocument patientId={patientId} documentType="document" />
        </TabsContent>
      </Tabs>
    ),
    [patientId]
  );
  return (
    <div>
      <>
        <PatientFolderHeader />
        {tabs}
      </>
    </div>
  );
}

export default PatientViewScreen;
