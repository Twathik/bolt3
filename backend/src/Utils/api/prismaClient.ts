/* eslint-disable no-var */
/* eslint-disable vars-on-top */

import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient
}
// eslint-disable-next-line import/no-mutable-exports
let prisma: PrismaClient
// check to use this workaround only in development and not in production
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}
export default prisma
