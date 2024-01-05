import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { MobileDevice } from '../../@generated'
import { RegisterOneMobileDeviceArgs } from './Args/registerMobileDeviceArgs'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class RegisterOneMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => MobileDevice, {
    nullable: true,
  })
  async registerOneMobileDevice(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args()
    { accessToken, uuid, userId }: RegisterOneMobileDeviceArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<MobileDevice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient

    try {
      const mobileDevice = await prisma.mobileDevice.findFirst({
        where: { accessToken: { equals: accessToken } },
      })
      if (!mobileDevice) throw Error()
      if (mobileDevice.expireAt < new Date()) throw Error()

      const result = await prisma.mobileDevice.update({
        where: { accessToken },
        data: {
          uuid,
          connected: true,
        },
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })

      const { id, connected, expireAt, mobileDeviceType } = result

      await notify({
        type: 'mobileDeviceUpdate',
        userId,
        global: true,
        appPayload: JSON.stringify({
          operation: 'update',
          mobileDevice: {
            id,
            accessToken,
            connected,
            expireAt,
            mobileDeviceType,
            uuid,
          },
        }),
      })

      return result
    } catch (error) {
      throw Error("an error occurred, Mobile device isn't registered!")
    }
  }
}
