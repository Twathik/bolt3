import * as z from "zod"
import { Sexe } from "@prisma/client"

export const PatientModel = z.object({
  id: z.string(),
  lastName: z.string(),
  firstName: z.string(),
  ddn: z.date(),
  sexe: z.nativeEnum(Sexe),
  nTel: z.string().array(),
  created: z.date(),
  updated: z.date(),
  deleted: z.boolean(),
})
