import { z } from 'zod'

export const PatientScalarFieldEnumSchema = z.enum([
  'id',
  'lastName',
  'firstName',
  'fullName',
  'ddn',
  'sexe',
  'nTel',
  'created',
  'updated',
  'deleted',
])
