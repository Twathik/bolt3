/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client'
import { config } from 'dotenv'
import { Request, Response } from 'express'
import prisma from './Utils/api/prismaClient'
import { Client } from 'typesense'
import typesense from './Utils/typesense'
import { axiosOrthancInstance as orthanc } from './Utils/api/axiosConfig'
import { AxiosInstance } from 'axios'

config({
  path:
    process.env.NODE_ENV === 'production' ? '.envs/prod.env' : '.envs/dev.env',
})

export interface Context {
  prisma: PrismaClient
  req: Request
  res: Response
  typesense: Client
  orthanc: AxiosInstance
}
export function createContext(ctx: { req: Request; res: Response }) {
  return {
    ...ctx,
    prisma,
    // user,
    typesense,
    orthanc,
  }
}

export function createSubscriptionContext(ctx: any) {
  return {
    ...ctx,
    prisma,
    // user,
    typesense,
  }
}
