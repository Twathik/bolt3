import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { PatientCountOrderByAggregateInputObjectSchema } from './PatientCountOrderByAggregateInput.schema'
import { PatientMaxOrderByAggregateInputObjectSchema } from './PatientMaxOrderByAggregateInput.schema'
import { PatientMinOrderByAggregateInputObjectSchema } from './PatientMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    ddn: z.lazy(() => SortOrderSchema).optional(),
    sexe: z.lazy(() => SortOrderSchema).optional(),
    nTel: z.lazy(() => SortOrderSchema).optional(),
    created: z.lazy(() => SortOrderSchema).optional(),
    updated: z.lazy(() => SortOrderSchema).optional(),
    deleted: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PatientCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => PatientMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PatientMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const PatientOrderByWithAggregationInputObjectSchema = Schema
