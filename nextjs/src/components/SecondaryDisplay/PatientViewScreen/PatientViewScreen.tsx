"use client";
import type { SecondaryDisplayInterface } from "@/lib/interfaces/GlobalSubscriptionInterfaces";
import React, { useEffect, useMemo } from "react";
import PatientFolderHeader from "./PatientFolderHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useBoltStore } from "@/stores/boltStore";
import CopyFolderComponent from "./CopyFolderComponent";

function PatientViewScreen({
  payload,
}: {
  payload: SecondaryDisplayInterface;
}) {
  const initialPatient = useMemo(() => JSON.parse(payload.payload), [payload]);
  const setPatient = useBoltStore((s) => s.setPatient);
  useEffect(() => {
    if (initialPatient) {
      setPatient(initialPatient);
    }
  }, [initialPatient, setPatient]);
  return (
    <div>
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
        <TabsContent value="informations">Patient info</TabsContent>
        <TabsContent value="focusedDocument">focused document</TabsContent>
        <TabsContent value="copyFolder">
          <CopyFolderComponent />
        </TabsContent>
        <TabsContent value="copyDocuments">Document copy</TabsContent>
      </Tabs>
    </div>
  );
}

export default PatientViewScreen;
