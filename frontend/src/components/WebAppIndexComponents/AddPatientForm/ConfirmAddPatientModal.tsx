import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

import React, { useEffect } from "react";
import AddPatientFormSchema from "./AddPatientFormSchema";
import { z } from "zod";
import Hit from "../BoltSearch/BoltSearchHits";
import { useQuery } from "@/components/wg-generated/nextjs";
import { getYear } from "date-fns";
import AppSkeleton from "@/components/GeneralComponents/AppUi/AppSkeleton";

interface ConfirmAddPatientModalInterface {
  patient: z.infer<typeof AddPatientFormSchema> | null;
  isValid: boolean;
}
function ConfirmAddPatientModal({
  patient,
  isValid,
}: ConfirmAddPatientModalInterface) {
  const { data, isLoading, mutate } = useQuery({
    operationName: "patients/searchPatients",
    enabled: true,
    input: {
      query_string: `${patient?.lastName} ${patient?.firstName} ${getYear(
        new Date(patient?.ddn ?? ""),
      )}`,
      sexe: patient?.sexe ?? "M",
    },
  });

  useEffect(() => {
    mutate();
  }, [patient]);

  return patient ? (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button type="submit" className="w-full" disabled={!isValid}>
          <PaperAirplaneIcon className="mr-2 h-4 w-4" />
          Valider
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Etes vous sur de voulir crée un nouveau dossier?
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isLoading ? (
              <AppSkeleton />
            ) : data?.mainDb_searchPatientResolver.length ? (
              <>
                <h5>
                  Veuillez vous assurer que le patient ne possède pas un dossier
                  avant d'en créer un nouveau, en cas de doute veuillez utiliser{" "}
                  <strong>BoltSearch</strong>
                </h5>
                {data.mainDb_searchPatientResolver.map((result) => (
                  <Hit key={result.id} hit={result} highlight={false} />
                ))}
              </>
            ) : (
              <h5>
                Aucun résultat correspondant aux informations saisie n'a été
                retrouvé
              </h5>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ) : (
    <div></div>
  );
}

export default ConfirmAddPatientModal;
