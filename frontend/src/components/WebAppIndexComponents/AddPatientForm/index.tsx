"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toaster } from "react-hot-toast";
import AddPatientForm from "./AddPatientForm";

const AddPatient = () => {
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
