import { z } from 'zod'
import { PatientOrderByWithRelationInputObjectSchema } from './objects/PatientOrderByWithRelationInput.schema'
import { PatientWhereInputObjectSchema } from './objects/PatientWhereInput.schema'
import { PatientWhereUniqueInputObjectSchema } from './objects/PatientWhereUniqueInput.schema'
import { PatientScalarFieldEnumSchema } from './enums/PatientScalarFieldEnum.schema'

export const PatientFindFirstSchema = z.object({
  orderBy: z
    .union([
      PatientOrderByWithRelationInputObjectSchema,
      PatientOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PatientWhereInputObjectSchema.optional(),
  cursor: PatientWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PatientScalarFieldEnumSchema).optional(),
})
