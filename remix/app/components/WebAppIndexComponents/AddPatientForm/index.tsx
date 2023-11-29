import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/components/ui/card";

import AddPatientForm from "./AddPatientForm";
import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";

const AddPatient = ({ consultationId }: { consultationId: string }) => {
  const setConsultationId = useBoltStore((store) => store.setConsultationId);

  useEffect(() => {
    setConsultationId(consultationId);
  }, [consultationId, setConsultationId]);

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
        <AddPatientForm defaultValues={undefined} />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default AddPatient;
