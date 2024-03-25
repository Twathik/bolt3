import * as TypeGraphQL from 'type-graphql'
import { MobileDevice } from '../../@generated'
import { getPrismaFromContext } from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { SwitchMobileDeviceArgs } from './Args/switchMobileDeviceArgs'
import { Context } from '../../context'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'
import { v4 } from 'uuid'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class SwitchMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => Boolean, {
    nullable: true,
  })
  async switchMobileDevice(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Args()
    { mobileDeviceType, id }: SwitchMobileDeviceArgs,
  ): Promise<Boolean | null> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    const pubsub = ctx.pubSub

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
      const updatedMobileDevice = await prisma.mobileDevice.update({
        where: { id },
        data: { mobileDeviceType, connected: false },
      })

      const message: WebsocketMessageInterface = {
        id: v4(),
        type: 'mobileDevice',
        destination: ['mobileDevices'],
        global: true,
        subscriptionIds: [],
        payload: {
          operation: 'update',
          mobileDevice: updatedMobileDevice,
        },
      }

      await pubsub.publish(notificationTopic, message)

      return true
    } catch (error) {
      console.log({ error })
      throw Error("an error occurred, Mobile device isn't registered!")
    }
  }
}
