import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { MobileDevice } from '../../@generated'
import {
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { DeleteOneMobileDeviceArgs } from './Args/DeleteOneMobileDeviceArgs'
import { Context } from '../../context'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'
import { v4 as uuid } from 'uuid'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class DeleteOneMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => MobileDevice, {
    nullable: true,
  })
  async deleteOneMobileDevice(
    @TypeGraphQL.Ctx() { prisma, pubSub }: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: DeleteOneMobileDeviceArgs,
  ): Promise<MobileDevice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    try {
      const mobileDevice = await prisma.mobileDevice.delete({
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
          operation: 'delete',
          mobileDevice: {
            ...mobileDevice,
            expireAt: mobileDevice.expireAt.toISOString(),
          },
        },
      }

      await pubSub.publish(notificationTopic, message)

      return mobileDevice
    } catch (error) {
      throw Error('deletion failed')
    }
  }
}
