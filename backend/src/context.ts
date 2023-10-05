/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client'
import { config } from 'dotenv'
import { Request, Response } from 'express'
import prisma from './Utils/api/prismaClient'

config({
  path:
    process.env.NODE_ENV === 'production' ? '.envs/prod.env' : '.envs/dev.env',
})

export interface Context {
  prisma: PrismaClient
  req: Request
  res: Response
}
export function createContext(ctx: any) {
  return {
    ...ctx,
    prisma,
    // user,
  }
}
