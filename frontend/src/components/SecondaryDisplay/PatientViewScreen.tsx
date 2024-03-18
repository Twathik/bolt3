"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import CopyFolderComponent from "./PatientViewScreen/CopyFolderComponent";
import PatientFolderHeader from "./PatientViewScreen/PatientFolderHeader";

function PatientViewScreen({ focusedPatientId }: { focusedPatientId: string }) {
  return (
    <div>
      <>
        <PatientFolderHeader />

        <Tabs defaultValue="informations" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="informations">Informations</TabsTrigger>
            <TabsTrigger value="focusedDocument">Document en cours</TabsTrigger>
            <TabsTrigger value="copyFolder">Replicat du dossier</TabsTrigger>
            <TabsTrigger value="copyDocuments">
              Replicat des documents
            </TabsTrigger>
          </TabsList>
          <TabsContent value="informations"></TabsContent>
          <TabsContent value="focusedDocument">focused document</TabsContent>
          <TabsContent value="copyFolder">
            <CopyFolderComponent />
          </TabsContent>
          <TabsContent value="copyDocuments">Document copy</TabsContent>
        </Tabs>
      </>
    </div>
  );
}

export default PatientViewScreen;
