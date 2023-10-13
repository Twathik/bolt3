"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import AddPatientForm from "./AddPatientForm";
import useConsultationStore from "@/store/consultationStore";
import { useEffect } from "react";
import { useQuery } from "@/components/wg-generated/nextjs";
import { getDate, getMonth, getYear } from "date-fns";
import FormSkeleton from "@/components/GeneralComponents/AppUi/FormSkeleton";

const AddPatient = () => {
  const { consultationState, setConsultationId } = useConsultationStore();

  const { data } = useQuery({
    operationName: "consultationList/todayConsultation",
    input: {
      day: getDate(new Date()),
      month: getMonth(new Date()),
      year: getYear(new Date()),
    },
  });

  useEffect(() => {
    setConsultationId(data?.mainDb_findFirstConsultation?.id ?? null);
  }, [data]);

  return (
    <Card className="m-20 block">
      <CardHeader>
        <CardTitle>Crée un nouveau dossier</CardTitle>
        <CardDescription>
          Veuillez vous assurer que le patient ne possede pas de dossier avant
          de'en créer un nouveau
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <AddPatientForm />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default AddPatient;
