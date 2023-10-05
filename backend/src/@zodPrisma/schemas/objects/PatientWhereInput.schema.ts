import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { EnumSexeFilterObjectSchema } from './EnumSexeFilter.schema'
import { SexeSchema } from '../enums/Sexe.schema'
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PatientWhereInputObjectSchema),
        z.lazy(() => PatientWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PatientWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PatientWhereInputObjectSchema),
        z.lazy(() => PatientWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lastName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    firstName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    fullName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    ddn: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    sexe: z
      .union([
        z.lazy(() => EnumSexeFilterObjectSchema),
        z.lazy(() => SexeSchema),
      ])
      .optional(),
    nTel: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    created: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    deleted: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
  })
  .strict()

export const PatientWhereInputObjectSchema = Schema
