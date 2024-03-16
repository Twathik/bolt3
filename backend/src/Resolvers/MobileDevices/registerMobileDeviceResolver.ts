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
import { Context } from '../../context'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class RegisterOneMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => MobileDevice, {
    nullable: true,
  })
  async registerOneMobileDevice(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args()
    { accessToken, uuid }: RegisterOneMobileDeviceArgs,
  ): Promise<MobileDevice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    const pubsub = ctx.pubSub

    try {
      const mobileDevice = await prisma.mobileDevice.findFirst({
        where: { accessToken: { equals: accessToken } },
      })
      if (!mobileDevice) throw Error()
      if (mobileDevice.expireAt < new Date()) throw Error()

      const updatedMobileDevice = await prisma.mobileDevice.update({
        where: { accessToken },
        data: {
          uuid,
          connected: true,
        },
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })

      const message: WebsocketMessageInterface = {
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

      return updatedMobileDevice
    } catch (error) {
      throw Error("an error occurred, Mobile device isn't registered!")
    }
  }
}
