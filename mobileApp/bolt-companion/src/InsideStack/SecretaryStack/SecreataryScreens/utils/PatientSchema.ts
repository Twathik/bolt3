import { z } from "zod";

export const PatientSchema = z.object(
  {
    firstName: z.string({ required_error: "champ requis" }),
    lastName: z.string({ required_error: "champ requis" }),
    ddn: z.date({
      required_error: "champ requis",
      invalid_type_error: "Valeure non valide",
    }),
    sexe: z.enum(["Homme", "Femme"], {
      invalid_type_error: "Valeure non valide",
      required_error: "chmap requis!",
    }),
  },
  { required_error: "champ requis" }
);
