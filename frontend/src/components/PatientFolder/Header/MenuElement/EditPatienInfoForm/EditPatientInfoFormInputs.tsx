import { AppFormConfigurationInterface } from "@/components/GeneralComponents/FormBuilder/AppFormRoot/utils/AppBuilderBuilderPropsInterface";
import { z } from "zod";
import EditPatientInfoFormSchema from "./EditPatientInfoFormSchema";

export const EditPatientInfoFormInputs: AppFormConfigurationInterface<
  z.infer<typeof EditPatientInfoFormSchema>
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
  {
    type: "text",
    name: "nTel",
    label: "N° de telephone",
    placeholder: "N° de telephone",
  },
  {
    type: "text",
    name: "address",
    label: "Adresse",
    placeholder: "Adresse",
  },
];
