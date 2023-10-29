import { z } from "zod";

const ChangeMobileDeviceExpireDateSchema = z.object({
  Months: z.coerce.number({
    required_error: "Champ requis!",
    invalid_type_error: "Veuillez saisir un chiffre",
  }),
});

export default ChangeMobileDeviceExpireDateSchema;
