import { isValid, parse } from "date-fns";
import { enGB } from "date-fns/locale";
import { z } from "zod";

const AddPatientFormSchema = z.object({
  lastName: z
    .string({
      required_error: "Champ requis",
      invalid_type_error: "Champ text",
    })
    .min(2, { message: "Au moins deux caractères" })
    .max(50, { message: "maximum de 50 caractères" }),
  firstName: z
    .string({
      required_error: "Champ requis",
      invalid_type_error: "Champ text",
    })
    .min(2, { message: "Au moins deux caractères" })
    .max(50, { message: "maximum de 50 caractères" }),
  ddn: z.custom<string>((val) => {
    const parsedDate = parse(val as string, "P", new Date(), { locale: enGB });

    return isValid(parsedDate);
  }, "Date non valide"),
  sexe: z.enum(["M", "F"], {
    required_error: "Champ requis",
    invalid_type_error: "Données corrompues",
  }),
});

export default AddPatientFormSchema;
