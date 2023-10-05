import { z } from 'zod'
import { SexeSchema } from '../enums/Sexe.schema'
import { NestedEnumSexeFilterObjectSchema } from './NestedEnumSexeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumSexeFilter> = z
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

export const EnumSexeFilterObjectSchema = Schema
