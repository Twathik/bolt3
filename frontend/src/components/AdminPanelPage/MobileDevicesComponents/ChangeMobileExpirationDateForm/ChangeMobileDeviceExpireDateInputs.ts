import type { AppFormConfigurationInterface } from "@/components/GeneralComponents/FormBuilder/AppFormRoot/utils/AppBuilderBuilderPropsInterface";
import type { z } from "zod";
import type ChangeMobileDeviceExpireDateSchema from "./ChangeMobileDeviceExpireDateSchema";

export const ChangeMobileDeviceExpireDateInputs: AppFormConfigurationInterface<
  z.infer<typeof ChangeMobileDeviceExpireDateSchema>
>["inputs"] = [
  {
    type: "number",
    name: "Months",
    label: "Nombre de mois à rajouter",
    placeholder: "exp 12 mois pour une année de licence",
  },
];
