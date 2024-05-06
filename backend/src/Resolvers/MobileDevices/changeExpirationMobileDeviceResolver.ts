import * as TypeGraphQL from 'type-graphql'
import { MobileDevice } from '../../@generated'
import { changeExpirationMobileDeviceArgs } from './Args/changeExpirationMobileDeviceArgs'
import { addMonths } from 'date-fns'
import { Context } from '../../context'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'
import { v4 as uuid } from 'uuid'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class ChangeExpirationMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => Boolean, {
    nullable: true,
  })
  async changeExpirationMobileDeviceResolver(
    @TypeGraphQL.Ctx() { prisma, pubSub }: Context,
    @TypeGraphQL.Args()
    { Months, id }: changeExpirationMobileDeviceArgs,
  ): Promise<Boolean | null> {
    try {
      const mobileDevice = await prisma.mobileDevice.findFirst({
        where: { id: { equals: id } },
      })
      if (!mobileDevice) throw Error('not found device')
      const expired = mobileDevice.expireAt < new Date()

      const exp: Date = expired
        ? addMonths(mobileDevice.expireAt, Months)
        : addMonths(new Date(), Months)

      const updatedMobileDevice = await prisma.mobileDevice.update({
        where: { id },
        data: { expireAt: exp },
      })
      const message: WebsocketMessageInterface = {
        id: uuid(),
        type: 'mobileDevice',
        destination: ['mobileDevices'],
        global: true,
        subscriptionIds: [],
        payload: {
          operation: 'update',
          mobileDevice: {
            ...updatedMobileDevice,
            expireAt: updatedMobileDevice.expireAt.toISOString(),
          },
        },
      }

      await pubSub.publish(notificationTopic, message)

      return true
    } catch (error) {
      throw Error("an error occurred, Mobile device isn't registered!")
    }
  }
}
