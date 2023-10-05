import { z } from 'zod'
import { SexeSchema } from '../enums/Sexe.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumSexeFilterObjectSchema } from './NestedEnumSexeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.NestedEnumSexeWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumSexeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumSexeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumSexeFilterObjectSchema).optional(),
  })
  .strict()

export const NestedEnumSexeWithAggregatesFilterObjectSchema = Schema
