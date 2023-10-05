import * as z from "zod"
import { Role } from "@prisma/client"

export const UserModel = z.object({
  id: z.string(),
  email: z.string(),
  userId: z.string(),
  lastName: z.string().nullish(),
  firstName: z.string().nullish(),
  fullName: z.string().nullish(),
  avatarUrl: z.string().nullish(),
  role: z.nativeEnum(Role),
  phoneNumbers: z.string().array(),
  lastConnection: z.date(),
  typesenseApiKey: z.string().nullish(),
})
