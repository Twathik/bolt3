"use client";
import ErrorNotification from "@/components/GeneralComponents/Notifications/ErrorNotification";
import { useToast } from "@/components/ui/use-toast";
import { PatientsGetOnePatientResponseData } from "@/components/wg-generated/models";
import { useSubscription } from "@/components/wg-generated/nextjs";
import React, { useEffect, useState } from "react";

interface useSyncPatientInformationInterface {
  patient: PatientsGetOnePatientResponseData["mainDb_getPatient"] | null;
  setPatient: React.Dispatch<
    React.SetStateAction<
      PatientsGetOnePatientResponseData["mainDb_getPatient"] | undefined | null
    >
  >;
}
function useSyncPatientInformation({
  initialPatient,
}: {
  initialPatient: PatientsGetOnePatientResponseData["mainDb_getPatient"] | null;
}): useSyncPatientInformationInterface {
  const { toast } = useToast();
  const [patient, setPatient] = useState<
    PatientsGetOnePatientResponseData["mainDb_getPatient"] | undefined | null
  >(initialPatient);
  const { data, error } = useSubscription({
    operationName: "patients/getUpdatedPatientSubscription",
    input: { id: initialPatient?.id || "" },
  });
  useEffect(() => {
    if (data) setPatient(data?.mainDb_getUpdatedPatient);
  }, [data]);
  useEffect(() => {
    if (error)
      toast({
        title: "Erreur reseau",
        description: error?.message || "Le dossier n'a pas pu être réccupéré",
        duration: 2000,
        variant: "destructive",
      });
  }, [error]);
  return {
    patient,
    setPatient,
  };
}

export default useSyncPatientInformation;
