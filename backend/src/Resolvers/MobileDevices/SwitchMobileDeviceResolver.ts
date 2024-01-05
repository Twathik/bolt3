import * as TypeGraphQL from 'type-graphql'
import { MobileDevice } from '../../@generated'
import { getPrismaFromContext } from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { SwitchMobileDeviceArgs } from './Args/switchMobileDeviceArgs'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class SwitchMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => Boolean, {
    nullable: true,
  })
  async switchMobileDevice(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args()
    { mobileDeviceType, id, userId }: SwitchMobileDeviceArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<Boolean | null> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient

    try {
      const mobileDevice = await prisma.mobileDevice.findFirst({
        where: { id: { equals: id } },
      })
      if (!mobileDevice) throw Error('not found device')

      if (mobileDevice.expireAt < new Date()) throw Error('expired')

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
      const result = await prisma.mobileDevice.update({
        where: { id },
        data: { mobileDeviceType, connected: false },
      })
      const { accessToken, connected, expireAt, uuid } = result

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

      return true
    } catch (error) {
      throw Error("an error occurred, Mobile device isn't registered!")
    }
  }
}
