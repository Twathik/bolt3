import * as TypeGraphQL from 'type-graphql'
import { Context } from '../../context'
import { MobileDevice, User } from '../../@generated'
import { getPrismaFromContext } from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { RegisterOneMobileDeviceArgs } from './Args/registerMobileDeviceArgs'

@TypeGraphQL.Resolver((_of) => User)
export class AuthMobileApp {
  @TypeGraphQL.Query((_returns) => MobileDevice)
  async authMobileApp(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Args()
    { accessToken, uuid }: RegisterOneMobileDeviceArgs,
  ): Promise<MobileDevice | null> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    try {
      const mobileDevice = await prisma.mobileDevice.findUnique({
        where: { uuid_accessToken: { accessToken, uuid } },
      })

      if (mobileDevice === null) throw Error('not found')
      if (mobileDevice.expireAt < new Date()) throw Error('expired')
      if (!mobileDevice.connected) throw Error('inactive')
      return mobileDevice
    } catch (error) {
      console.log({ error })
      throw Error('Authentication failed')
    }
  }
}
