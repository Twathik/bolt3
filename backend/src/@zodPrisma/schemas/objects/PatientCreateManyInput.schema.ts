import { z } from 'zod'
import { SexeSchema } from '../enums/Sexe.schema'
import { PatientCreatenTelInputObjectSchema } from './PatientCreatenTelInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateManyInput> = z
  .object({
    id: z.string().optional(),
    lastName: z.string(),
    firstName: z.string(),
    ddn: z.coerce.date(),
    sexe: z.lazy(() => SexeSchema),
    nTel: z
      .union([
        z.lazy(() => PatientCreatenTelInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    created: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
    deleted: z.boolean().optional(),
  })
  .strict()

export const PatientCreateManyInputObjectSchema = Schema
