import type { AppFormConfigurationInterface } from "@/components/GeneralComponents/FormBuilder/AppFormRoot/utils/AppBuilderBuilderPropsInterface";
import type { z } from "zod";
import type EconomizerSchema from "./EconomizerSchema";

export const CreateEconomizerInputs: AppFormConfigurationInterface<
  z.infer<typeof EconomizerSchema>
>["inputs"] = [
  {
    type: "text",
    label: "Titre de l'economizeur",
    name: "name",
    placeholder: "",
  },
];
