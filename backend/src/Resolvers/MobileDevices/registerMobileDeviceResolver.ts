import * as TypeGraphQL from 'type-graphql'
import { MobileDevice } from '../../@generated'
import { RegisterOneMobileDeviceArgs } from './Args/registerMobileDeviceArgs'
import { getPrismaFromContext } from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { Context } from '../../context'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { v4 } from 'uuid'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class RegisterOneMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => MobileDevice, {
    nullable: true,
  })
  async registerOneMobileDevice(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Args()
    { accessToken }: RegisterOneMobileDeviceArgs,
  ): Promise<MobileDevice | null> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    const pubsub = ctx.pubSub

    try {
      const mobileDevice = await prisma.mobileDevice.findFirst({
        where: { accessToken: { equals: accessToken } },
      })
      if (!mobileDevice) throw Error()
      if (mobileDevice.expireAt < new Date()) throw Error()

      const message: WebsocketMessageInterface = {
        id: v4(),
        type: 'mobileDevice',
        destination: ['mobileDevices'],
        global: true,
        subscriptionIds: [],
        payload: {
          operation: 'update',
          mobileDevice: {
            ...mobileDevice,
            expireAt: mobileDevice.expireAt.toISOString(),
          },
        },
      }

      await pubsub.publish(notificationTopic, message)

      return mobileDevice
    } catch (error) {
      throw Error("an error occurred, Mobile device isn't registered!")
    }
  }
}
