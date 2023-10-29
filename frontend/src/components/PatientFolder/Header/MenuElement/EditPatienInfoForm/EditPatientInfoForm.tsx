import React, { useState } from "react";
import AppFormBuilder from "@/components/GeneralComponents/FormBuilder/AppFormRoot/AppFormBuilder";
import { z } from "zod";
import AddPatientFormSchema from "@/components/WebAppIndexComponents/AddPatientForm/AddPatientFormSchema";
import { AddPatientFormInputs } from "@/components/WebAppIndexComponents/AddPatientForm/AddPatientFormInputs";
import { useMutation } from "@/components/wg-generated/nextjs";
import { Button } from "@/components/ui/button";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { parse } from "date-fns";
import { enGB } from "date-fns/locale";
import { EditPatientInfoFormInputs } from "./EditPatientInfoFormInputs";
import EditPatientInfoFormSchema from "./EditPatientInfoFormSchema";

function EditPatientInfoForm({
  defaultValues,
  id,
  setOpen,
}: {
  defaultValues: z.infer<typeof EditPatientInfoFormSchema>;
  id: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isMutating, trigger, error } = useMutation({
    operationName: "patients/updateOnePatient",

    onSuccess: () => {
      setOpen(false);
    },
  });
  const [isValid, setIsValid] = useState<boolean>(false);

  async function onSubmit(values: z.infer<typeof EditPatientInfoFormSchema>) {
    try {
      const ddn = parse(values.ddn as string, "P", new Date(), {
        locale: enGB,
      }).toISOString();

      await trigger({
        ...values,
        ddn,
        id,
        nTel: values.nTel ?? "",
        address: values.address ?? "",
      });
    } catch (error) {
      console.log({ errorFromTrigger: error });
    }
  }

  return (
    <AppFormBuilder
      submitButton={
        <>
          <Button
            className="w-full"
            type="submit"
            disabled={!isValid || isMutating}
          >
            <PaperAirplaneIcon className="mr-2 h-4 w-4" />
            Valider
          </Button>
          {error && (
            <span className="text-red-800">
              Une erreur est survenue, les informations n'on pas pu être
              enregistré {error.message}
            </span>
          )}
        </>
      }
      setIsValid={setIsValid}
      formSchema={EditPatientInfoFormSchema}
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      mode="onChange"
      inputs={[...EditPatientInfoFormInputs, ...EditPatientInfoFormInputs]}
    />
  );
}

export default EditPatientInfoForm;
