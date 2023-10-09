import { z } from 'zod'

export const PatientScalarFieldEnumSchema = z.enum([
  'id',
  'lastName',
  'firstName',
  'ddn',
  'sexe',
  'nTel',
  'created',
  'updated',
  'deleted',
])
