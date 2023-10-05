import { z } from 'zod'
import { SexeSchema } from '../enums/Sexe.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.NestedEnumSexeFilter> = z
  .object({
    equals: z.lazy(() => SexeSchema).optional(),
    in: z
      .union([z.lazy(() => SexeSchema).array(), z.lazy(() => SexeSchema)])
      .optional(),
    notIn: z
      .union([z.lazy(() => SexeSchema).array(), z.lazy(() => SexeSchema)])
      .optional(),
    not: z
      .union([
        z.lazy(() => SexeSchema),
        z.lazy(() => NestedEnumSexeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const NestedEnumSexeFilterObjectSchema = Schema
