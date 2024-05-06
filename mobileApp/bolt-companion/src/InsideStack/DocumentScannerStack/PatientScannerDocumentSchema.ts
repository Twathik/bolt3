import { z } from "zod";

export const PatientScannerDocumentSchema = z.object(
  {
    documentCollectionName: z.string({ required_error: "champ requis" }),
    documentCollectionDate: z.date({
      required_error: "champ requis",
      invalid_type_error: "Valeure non valide",
    }),
  },
  { required_error: "champ requis" }
);
