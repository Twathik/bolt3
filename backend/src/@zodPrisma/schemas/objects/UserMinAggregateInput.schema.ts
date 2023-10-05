import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    email: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    lastName: z.literal(true).optional(),
    firstName: z.literal(true).optional(),
    fullName: z.literal(true).optional(),
    avatarUrl: z.literal(true).optional(),
    role: z.literal(true).optional(),
    lastConnection: z.literal(true).optional(),
    typesenseApiKey: z.literal(true).optional(),
  })
  .strict()

export const UserMinAggregateInputObjectSchema = Schema
