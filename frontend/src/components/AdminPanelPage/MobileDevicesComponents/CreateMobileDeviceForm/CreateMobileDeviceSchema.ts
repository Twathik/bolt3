import { z } from "zod";

const CreateMobileDeviceSchema = z.object({
  expireAt: z.coerce.number({
    required_error: "Champ requis!",
    invalid_type_error: "Veuillez saisir un chiffre",
  }),
  mobileDeviceType: z.enum(["DOCTOR", "SECRETARY"], {
    required_error: "Champ requis",
    invalid_type_error: "Données corrompues",
  }),
});

export default CreateMobileDeviceSchema;
