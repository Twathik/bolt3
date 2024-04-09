/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useCallback, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import PatientFolderHeader from "./PatientViewScreen/PatientFolderHeader";
import PatientInformationComponent from "./PatientViewScreen/PatientInformationComponent";
import FocusedClinicalEventRootComponent from "./PatientViewScreen/FocusedClinicalEventRootComponent";
import CopyPatientDocument from "./PatientViewScreen/CopyPatientDocument";
import { useBoltStore } from "@/stores/boltStore";
import DicomRootComponent from "./PatientViewScreen/Dicom/DicomRootComponent";
import type { PatientViewTabs } from "@/stores/boltStoreType";
import DicomScreen from "./DicomView";

function PatientViewScreen({
  patientId,
  patientTab,
}: {
  patientId: string;
  patientTab: PatientViewTabs;
}) {
  const setPatientViewTab = useBoltStore((s) => s.setPatientViewTab);

  const setInformation = useCallback(
    () => setPatientViewTab("informations"),
    [setPatientViewTab]
  );
  const setFocusedDocument = useCallback(
    () => setPatientViewTab("focusedDocument"),
    [setPatientViewTab]
  );
  const setCopyFolder = useCallback(
    () => setPatientViewTab("copyFolder"),
    [setPatientViewTab]
  );
  const setCopyDocuments = useCallback(
    () => setPatientViewTab("copyDocuments"),
    [setPatientViewTab]
  );
  const setImagerie = useCallback(
    () => setPatientViewTab("allDicomVue"),
    [setPatientViewTab]
  );
  const setDicomVue = useCallback(
    () => setPatientViewTab("dicomView"),
    [setPatientViewTab]
  );
  const patientTabs = useMemo(
    () => (
      <Tabs
        defaultValue="informations"
        className="w-full"
        value={patientTab}
        //onValueChange={onChangeTab}
      >
        <TabsList className="w-full">
          <TabsTrigger onClick={setInformation} value="informations">
            Informations
          </TabsTrigger>
          <TabsTrigger onClick={setFocusedDocument} value="focusedDocument">
            Document en cours
          </TabsTrigger>

          <TabsTrigger onClick={setCopyFolder} value="copyFolder">
            Replicat du dossier
          </TabsTrigger>
          <TabsTrigger onClick={setCopyDocuments} value="copyDocuments">
            Replicat des documents
          </TabsTrigger>
          <TabsTrigger onClick={setImagerie} value="allDicomVue">
            Imagerie du patient
          </TabsTrigger>
          <TabsTrigger onClick={setDicomVue} value="dicomView">
            Afficher l'imagerie en cours
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
        <TabsContent value="allDicomVue">
          <DicomRootComponent patientId={patientId} />
        </TabsContent>
        <TabsContent value="dicomView">
          <DicomScreen patientId={patientId} />
        </TabsContent>
      </Tabs>
    ),
    [
      patientId,
      patientTab,
      setCopyDocuments,
      setCopyFolder,
      setDicomVue,
      setFocusedDocument,
      setImagerie,
      setInformation,
    ]
  );
  return (
    <div>
      <>
        <PatientFolderHeader />
        {patientTabs}
      </>
    </div>
  );
}

export default PatientViewScreen;
