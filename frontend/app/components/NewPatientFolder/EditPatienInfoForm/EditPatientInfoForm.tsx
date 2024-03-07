import React, { useState } from "react";
import AppFormBuilder from "@/components/GeneralComponents/FormBuilder/AppFormRoot/AppFormBuilder";
import type { z } from "zod";
import { Button } from "@/ui/components/ui/button";
import { CiPaperplane } from "react-icons/ci";
import { parse } from "date-fns";
import enGB from "date-fns/locale/en-GB";
import { EditPatientInfoFormInputs } from "./EditPatientInfoFormInputs";
import EditPatientInfoFormSchema from "./EditPatientInfoFormSchema";
import { useMutation } from "@/lib/wundergraph";

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
        //@ts-expect-error
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
            disabled={!isValid || isMutating}>
            <span className="mr-2 h-4 w-4">
              <CiPaperplane />
            </span>
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
      inputs={EditPatientInfoFormInputs}
    />
  );
}

export default EditPatientInfoForm;
