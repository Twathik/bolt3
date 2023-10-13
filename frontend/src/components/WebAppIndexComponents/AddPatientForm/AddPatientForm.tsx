import React, { useState } from "react";
import AppFormBuilder from "@/components/GeneralComponents/FormBuilder/AppFormRoot/AppFormBuilder";
import { useMutation } from "../../wg-generated/nextjs";
import AddPatientFormSchema from "./AddPatientFormSchema";
import { z } from "zod";
import ConfirmAddPatientModal from "./ConfirmAddPatientModal";

function AddPatientForm() {
  const { trigger, isMutating } = useMutation({
    operationName: "patients/add_One_patient_to_index",
  });

  const defaultValues: z.infer<typeof AddPatientFormSchema> = {
    firstName: "",
    lastName: "",
    ddn: "",
    sexe: "M",
  };

  const [patient, SetPatient] =
    useState<z.infer<typeof AddPatientFormSchema>>(defaultValues);
  const [isValid, setIsValid] = useState<boolean>(false);

  async function onSubmit(values: z.infer<typeof AddPatientFormSchema>) {
    SetPatient(values);
  }

  return (
    <AppFormBuilder
      submitButton={
        <ConfirmAddPatientModal patient={patient} isValid={isValid} />
      }
      setIsValid={setIsValid}
      formSchema={AddPatientFormSchema}
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      mode="onChange"
      inputs={[
        {
          type: "text",
          name: "lastName",
          label: "Nom de Famille",
          placeholder: "Nom de famille",
        },
        {
          type: "text",
          name: "firstName",
          label: "Prénom",
          placeholder: "Prénom",
        },
        {
          type: "date",
          name: "ddn",
          label: "Date de naissance",
        },
        {
          type: "select",
          label: "Sexe",
          name: "sexe",
          options: [
            { value: "M", label: "Homme" },
            { value: "F", label: "Femme" },
          ],
          placeholder: "Selectionnez le sexe du patient",
        },
      ]}
    />
  );
}

export default AddPatientForm;
