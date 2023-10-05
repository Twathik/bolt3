import { z } from 'zod'
import { RoleSchema } from '../enums/Role.schema'
import { UserCreatephoneNumbersInputObjectSchema } from './UserCreatephoneNumbersInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    userId: z.string(),
    lastName: z.string().optional().nullable(),
    firstName: z.string().optional().nullable(),
    fullName: z.string().optional().nullable(),
    avatarUrl: z.string().optional().nullable(),
    role: z.lazy(() => RoleSchema).optional(),
    phoneNumbers: z
      .union([
        z.lazy(() => UserCreatephoneNumbersInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    lastConnection: z.coerce.date().optional(),
    typesenseApiKey: z.string().optional().nullable(),
  })
  .strict()

export const UserCreateInputObjectSchema = Schema
