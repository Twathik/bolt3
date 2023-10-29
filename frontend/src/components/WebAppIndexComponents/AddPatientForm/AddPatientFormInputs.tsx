import { AppFormConfigurationInterface } from "@/components/GeneralComponents/FormBuilder/AppFormRoot/utils/AppBuilderBuilderPropsInterface";
import AddPatientFormSchema from "./AddPatientFormSchema";
import { z } from "zod";

export const AddPatientFormInputs: AppFormConfigurationInterface<
  z.infer<typeof AddPatientFormSchema>
>["inputs"] = [
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
];
