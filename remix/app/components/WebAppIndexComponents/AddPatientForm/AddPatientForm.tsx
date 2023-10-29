import { useState } from "react";
import AppFormBuilder from "@/components/GeneralComponents/FormBuilder/AppFormRoot/AppFormBuilder";
import AddPatientFormSchema from "./AddPatientFormSchema";
import type { z } from "zod";
import ConfirmAddPatientModal from "./ConfirmAddPatientModal";
import { AddPatientFormInputs } from "./AddPatientFormInputs";
import _ from "lodash";

function AddPatientForm({
  defaultValues = {
    firstName: "",
    lastName: "",
    ddn: "",
    sexe: "M",
  },
}: {
  defaultValues: z.infer<typeof AddPatientFormSchema> | undefined;
}) {
  const [patient, SetPatient] =
    useState<z.infer<typeof AddPatientFormSchema>>(defaultValues);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [reset, setReset] = useState<boolean>(false);
  const [loading, setIsLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof AddPatientFormSchema>) {
    setReset(false);
    SetPatient({
      ...values,
      firstName: _.upperFirst(_.camelCase(values.firstName)),
      lastName: _.upperCase(values.lastName),
    });
  }

  return (
    <AppFormBuilder
      submitButton={
        <ConfirmAddPatientModal
          patient={patient}
          isValid={isValid}
          setReset={setReset}
          setIsLoading={setIsLoading}
        />
      }
      loading={loading}
      reset={reset}
      setIsValid={setIsValid}
      formSchema={AddPatientFormSchema}
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      mode="onChange"
      inputs={AddPatientFormInputs}
    />
  );
}

export default AddPatientForm;
