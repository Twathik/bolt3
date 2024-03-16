import type { AppFormConfigurationInterface } from "@/components/GeneralComponents/FormBuilder/AppFormRoot/utils/AppBuilderBuilderPropsInterface";
import type { z } from "zod";
import type UpdateModalitySchema from "./UpdateModalitySchema";

export const UpdateModalityInputs: AppFormConfigurationInterface<
  z.infer<typeof UpdateModalitySchema>
>["inputs"] = [
  {
    type: "text",
    name: "modalityPseudo",
    label: "Nom de l'appareil",
    placeholder: "Nom de l'appareil",
  },
  {
    type: "text",
    name: "modalityAETitle",
    label: "Titre AET",
    placeholder: "Titre de l'application AET",
  },
  {
    type: "text",
    name: "modalityIpAddress",
    label: "Adresse Ip",
    placeholder: "Addresse ip de l'appareil",
  },
  {
    type: "number",
    name: "modalityPort",
    label: "Numéro de port",
    placeholder: "Numéro du port d'écoute",
  },
  {
    type: "select",
    name: "modalityType",
    label: "Type d'appareil",
    placeholder: "Type d'appareil à connecter",
    options: [
      { value: "XA", label: "Salle de KT" },
      { label: "Appareil d'echographie", value: "US" },
    ],
  },
];
