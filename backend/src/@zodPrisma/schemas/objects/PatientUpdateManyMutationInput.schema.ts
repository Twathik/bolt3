import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { SexeSchema } from '../enums/Sexe.schema'
import { EnumSexeFieldUpdateOperationsInputObjectSchema } from './EnumSexeFieldUpdateOperationsInput.schema'
import { PatientUpdatenTelInputObjectSchema } from './PatientUpdatenTelInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientUpdateManyMutationInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    lastName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    firstName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    ddn: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    sexe: z
      .union([
        z.lazy(() => SexeSchema),
        z.lazy(() => EnumSexeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    nTel: z
      .union([
        z.lazy(() => PatientUpdatenTelInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    created: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updated: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    deleted: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const PatientUpdateManyMutationInputObjectSchema = Schema
