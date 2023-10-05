import { z } from 'zod'
import { SexeSchema } from '../enums/Sexe.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumSexeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => SexeSchema).optional(),
  })
  .strict()

export const EnumSexeFieldUpdateOperationsInputObjectSchema = Schema
