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
} from "@/ui/components/ui/alert-dialog";
import { Button } from "@/ui/components/ui/button";
import { GoPaperAirplane } from "react-icons/go";

import React, { useCallback, useEffect, useState } from "react";
import type AddPatientFormSchema from "./AddPatientFormSchema";
import type { z } from "zod";
import Hit from "../BoltSearch/BoltSearchHits";
import { getYear } from "date-fns";
import AppSkeleton from "@/components/GeneralComponents/AppUi/AppSkeleton";
import { useMutation } from "@/lib/wundergraph";
import { useToast } from "@/ui/components/ui/use-toast";
import { convertDate } from "@/lib/convertDate";
import CircularSpinner from "@/components/GeneralComponents/Spinners/CircularSpinner";
import type { patientHit } from "@/lib/typesense/searchPatient";
import searchPatient from "@/lib/typesense/searchPatient";
import { useBoltStore } from "@/stores/boltStore";
import createTypesenseClient from "@/lib/typesense/typesense";

interface ConfirmAddPatientModalInterface {
  patient: z.infer<typeof AddPatientFormSchema> | null;
  isValid: boolean;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
function ConfirmAddPatientModal({
  patient,
  isValid,
  setReset,
  setIsLoading,
}: ConfirmAddPatientModalInterface) {
  const [hits, setHits] = useState<patientHit[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const user = useBoltStore((store) => store.user);

  const { trigger: addPatient, isMutating: isAddingPatient } = useMutation({
    operationName: "patients/add_One_patient_to_index",
  });
  const { toast } = useToast();

  useEffect(() => {
    if (user?.searchApiKey && user?.searchApiKey?.length > 0) {
      setLoading(true);

      const client = createTypesenseClient(user?.searchApiKey ?? "");
      searchPatient({
        client,
        searchParams: {
          query_string: `${patient?.lastName} ${patient?.firstName} ${getYear(
            new Date(patient?.ddn ?? "")
          )}`,
          sexe: patient?.sexe ?? "M",
        },
      })
        .then((data) => {
          setHits(data?.hits ?? []);
          setLoading(false);
        })
        .catch((e) => {
          console.log({ e });
          toast({
            variant: "destructive",
            title: "Erreur réseau",
            description:
              "La vérification du dossier ne s'est pas faite correctement",
          });
          setLoading(false);
        });
    }
  }, [patient, toast, user?.searchApiKey]);
  useEffect(() => {
    setIsLoading(isAddingPatient);
  }, [isAddingPatient, setIsLoading]);

  const triggerAddOnePatient = useCallback(async () => {
    try {
      if (patient) {
        await addPatient({
          ...patient,
          ddn: convertDate(patient.ddn).toISOString(),
        });
        toast({
          variant: "default",
          title: "succes de l'opération",
          description: "Le patient a été inscrit dans l'index",
        });

        setReset(true);
      }
    } catch (error) {
      console.log({ error });
      toast({
        variant: "destructive",
        title: "Echec de l'opération",
        description: "Le patient n'a pas été inscrit dans l'index",
      });
    }
  }, [addPatient, patient, setReset, toast]);

  const openDialog = useCallback(() => {
    setOpen(true);
  }, []);

  const resetForm = useCallback(() => {
    setReset(true);
  }, [setReset]);

  return patient ? (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          type="submit"
          onClick={openDialog}
          className="w-full"
          disabled={!isValid || isAddingPatient}>
          <>
            {isAddingPatient ? (
              <CircularSpinner />
            ) : (
              <span className="mr-2 h-4 w-4">
                <GoPaperAirplane />
              </span>
            )}
            Valider
          </>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Etes vous sur de voulir crée un nouveau dossier?
          </AlertDialogTitle>
          <AlertDialogDescription>
            {loading ? (
              <AppSkeleton />
            ) : hits.length ? (
              <>
                <h5>
                  Veuillez vous assurer que le patient ne possède pas un dossier
                  avant d'en créer un nouveau, en cas de doute veuillez utiliser{" "}
                  <strong>BoltSearch</strong>
                </h5>
                {hits.map((result) => (
                  <Hit key={result.id} hit={result} />
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
          <AlertDialogCancel onClick={resetForm}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={triggerAddOnePatient}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ) : (
    <div></div>
  );
}

export default ConfirmAddPatientModal;
