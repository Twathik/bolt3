import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { MobileDevice } from '../../@generated'
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { CreateOneMobileDeviceArgs } from './Args/CreateOneMobileDeviceArgs'
import { Context } from '../../context'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'
import { v4 as uuid } from 'uuid'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class CreateOneMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => MobileDevice, {
    nullable: false,
  })
  async createOneMobileDevice(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: CreateOneMobileDeviceArgs,
  ): Promise<MobileDevice> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    const pubsub = ctx.pubSub

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
      const message: WebsocketMessageInterface = {
        id: uuid(),
        type: 'mobileDevice',
        destination: ['mobileDevices'],
        global: true,
        subscriptionIds: [],
        payload: {
          operation: 'create',
          mobileDevice,
        },
      }

      await pubsub.publish(notificationTopic, message)

      return mobileDevice
    } catch (error) {
      console.log({ error })
      throw Error('An error has occurred, the mobile Devices was not created')
    }
  }
}
