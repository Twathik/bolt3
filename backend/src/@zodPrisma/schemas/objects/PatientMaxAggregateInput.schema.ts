import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    lastName: z.literal(true).optional(),
    firstName: z.literal(true).optional(),
    ddn: z.literal(true).optional(),
    sexe: z.literal(true).optional(),
    created: z.literal(true).optional(),
    updated: z.literal(true).optional(),
    deleted: z.literal(true).optional(),
  })
  .strict()

export const PatientMaxAggregateInputObjectSchema = Schema
