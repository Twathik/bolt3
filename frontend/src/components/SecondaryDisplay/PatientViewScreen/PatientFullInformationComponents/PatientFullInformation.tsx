import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useBoltStore } from "@/stores/boltStore";
import { differenceInYears, format, parseISO } from "date-fns";
import React, { useMemo } from "react";

function PatientFullInformation() {
  const patient = useBoltStore((s) => s.patient);

  const ddn = useMemo(
    () => format(parseISO(patient?.ddn ?? ""), "dd-MM-yyyy"),
    [patient?.ddn]
  );
  const age = useMemo(
    () => differenceInYears(new Date(), parseISO(patient?.ddn ?? "")),
    [patient?.ddn]
  );
  return (
    <Card className="mx-5 mt-10">
      <CardHeader>
        <CardTitle>{patient?.patientFullName}</CardTitle>
        <CardDescription>
          DDN : {ddn}, Age : {age}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Nº de telephone :</strong> {patient?.nTel}
        </p>
        <p>
          <strong>Addresse :</strong> {patient?.address}{" "}
        </p>
        <p>
          <strong>Poids :</strong> {patient?.weight}{" "}
        </p>
        <p>
          <strong>Taille :</strong> {patient?.height}
        </p>
      </CardContent>
      <CardFooter>
        <p>Additional informations</p>
      </CardFooter>
    </Card>
  );
}

export default PatientFullInformation;
