import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { MobileDevice } from '../../@generated'
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../@generated/helpers'
import { UpdateOneMobileDeviceArgs } from './Args/UpdateOneMobileDeviceArgs'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'
import { Context } from '../../context'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class UpdateOneMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => MobileDevice, {
    nullable: true,
  })
  async updateOneMobileDevice(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: UpdateOneMobileDeviceArgs,
  ): Promise<MobileDevice | null> {
    try {
      const { _count } = transformInfoIntoPrismaArgs(info)
      const updatedMobileDevice = await getPrismaFromContext(
        ctx,
      ).mobileDevice.update({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      const pubsub = ctx.pubSub

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
      throw Error('Mobile Device : failed update')
    }
  }
}
