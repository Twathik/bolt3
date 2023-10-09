import React, { useState } from "react";
import AppFormBuilder from "@/components/GeneralComponents/FormBuilder/AppFormRoot/AppFormBuilder";
import { useMutation, useQuery } from "../../wg-generated/nextjs";
import AddPatientFormSchema from "./AddPatientFormSchema";
import { z } from "zod";
import SuccessNotification from "@/components/GeneralComponents/Notifications/SuccessNotification";
import ErrorNotification from "@/components/GeneralComponents/Notifications/ErrorNotification";
import toast from "react-hot-toast";
import ConfirmAddPatientModal from "./ConfirmAddPatientModal";
import { AppFormConfigurationInterface } from "@/components/GeneralComponents/FormBuilder/AppFormRoot/utils/AppBuilderBuilderPropsInterface";
import { getYear } from "date-fns";

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

  const { data, mutate, isLoading, error } = useQuery({
    operationName: "patients/searchPatients",
    enabled: true,
    input: {
      query_string: `${patient.lastName} ${patient.firstName} ${getYear(
        new Date(patient.ddn),
      )}`,
      sexe: patient.sexe,
    },
  });
  console.log({ data, isLoading, error });

  async function onSubmit(values: z.infer<typeof AddPatientFormSchema>) {
    SetPatient(values);
    await mutate();
    console.log({ data });
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
