import * as TypeGraphQL from 'type-graphql'
import { MobileDevice } from '../../@generated'
import { getPrismaFromContext } from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { changeExpirationMobileDeviceArgs } from './Args/changeExpirationMobileDeviceArgs'
import { addMonths } from 'date-fns'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class ChangeExpirationMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => Boolean, {
    nullable: true,
  })
  async changeExpirationMobileDeviceResolver(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args()
    { Months, id, userId }: changeExpirationMobileDeviceArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<Boolean | null> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient

    try {
      const mobileDevice = await prisma.mobileDevice.findFirst({
        where: { id: { equals: id } },
      })
      if (!mobileDevice) throw Error('not found device')
      const expired = mobileDevice.expireAt < new Date()

      const exp: Date = expired
        ? addMonths(mobileDevice.expireAt, Months)
        : addMonths(new Date(), Months)

      const { accessToken, connected, expireAt, mobileDeviceType, uuid } =
        await prisma.mobileDevice.update({
          where: { id },
          data: { expireAt: exp },
        })
      await notify({
        type: 'mobileDeviceUpdate',
        global: true,
        userId,
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
