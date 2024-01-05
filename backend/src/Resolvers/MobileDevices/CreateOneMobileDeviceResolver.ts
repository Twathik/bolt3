import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { MobileDevice } from '../../@generated'
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'
import { CreateOneMobileDeviceArgs } from './Args/CreateOneMobileDeviceArgs'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class CreateOneMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => MobileDevice, {
    nullable: false,
  })
  async createOneMobileDevice(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: CreateOneMobileDeviceArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<MobileDevice> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient

    const {
      data: { mobileDeviceType },
    } = args

    try {
      const allowedMobileDevices = await prisma.setting.findFirst()
      if (!allowedMobileDevices) throw Error('1')

      const devices_count = await prisma.mobileDevice.count({
        where: { mobileDeviceType: { equals: mobileDeviceType } },
      })

      if (devices_count === null) throw Error('2')

      if (
        mobileDeviceType === 'SECRETARY' &&
        devices_count === allowedMobileDevices.allowedMobileDevices_secretary
      )
        throw Error('3')
      if (
        mobileDeviceType === 'DOCTOR' &&
        devices_count === allowedMobileDevices.allowedMobileDevices_doctors
      )
        throw Error('4')
      const mobileDevice = await getPrismaFromContext(ctx).mobileDevice.create({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      const { id, accessToken, connected, expireAt, uuid } = mobileDevice
      await notify({
        type: 'mobileDeviceUpdate',
        userId,
        global: true,
        appPayload: JSON.stringify({
          operation: 'create',
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
      return mobileDevice
    } catch (error) {
      console.log({ error })
      throw Error('An error has occurred, the mobile Devices was not created')
    }
  }
}
