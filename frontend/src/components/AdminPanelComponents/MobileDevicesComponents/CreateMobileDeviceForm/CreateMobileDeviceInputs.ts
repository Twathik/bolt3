import { AppFormConfigurationInterface } from "@/components/GeneralComponents/FormBuilder/AppFormRoot/utils/AppBuilderBuilderPropsInterface";
import CreateMobileDeviceSchema from "./CreateMobileDeviceSchema";
import { z } from "zod";

export const CreateMobileDeviceInputs: AppFormConfigurationInterface<
  z.infer<typeof CreateMobileDeviceSchema>
>["inputs"] = [
  {
    type: "select",
    name: "mobileDeviceType",
    label: "Type d'application",
    placeholder: "Secretariat ou pour médecin",
    options: [
      { value: "DOCTOR", label: "Medecin" },
      { value: "SECRETARY", label: "Secrétariat" },
    ],
  },
  {
    type: "number",
    label: "Delais d'expiration en mois",
    name: "expireAt",
    placeholder: "",
  },
];
