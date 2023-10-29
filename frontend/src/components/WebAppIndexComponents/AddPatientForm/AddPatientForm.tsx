import React, { useState } from "react";
import AppFormBuilder from "@/components/GeneralComponents/FormBuilder/AppFormRoot/AppFormBuilder";
import AddPatientFormSchema from "./AddPatientFormSchema";
import { z } from "zod";
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

  async function onSubmit(values: z.infer<typeof AddPatientFormSchema>) {
    SetPatient({
      ...values,
      firstName: _.upperFirst(_.caller(values.firstName)),
      lastName: _.upperCase(values.lastName),
    });
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
      inputs={AddPatientFormInputs}
    />
  );
}

export default AddPatientForm;
