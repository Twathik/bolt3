import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    ddn: z.lazy(() => SortOrderSchema).optional(),
    sexe: z.lazy(() => SortOrderSchema).optional(),
    created: z.lazy(() => SortOrderSchema).optional(),
    updated: z.lazy(() => SortOrderSchema).optional(),
    deleted: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const PatientMinOrderByAggregateInputObjectSchema = Schema
