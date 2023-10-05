import { z } from 'zod'

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'userId',
  'lastName',
  'firstName',
  'fullName',
  'avatarUrl',
  'role',
  'phoneNumbers',
  'lastConnection',
  'typesenseApiKey',
])
