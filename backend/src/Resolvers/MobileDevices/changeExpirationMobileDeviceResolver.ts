import * as TypeGraphQL from 'type-graphql'
import { MobileDevice } from '../../@generated'
import { getPrismaFromContext } from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { changeExpirationMobileDeviceArgs } from './Args/changeExpirationMobileDeviceArgs'
import { addMonths } from 'date-fns'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class ChangeExpirationMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => Boolean, {
    nullable: true,
  })
  async changeExpirationMobileDeviceResolver(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args()
    { Months, id }: changeExpirationMobileDeviceArgs,
    @TypeGraphQL.PubSub('GET_ALL_MOBILE_DEVICES')
    publish: TypeGraphQL.Publisher<boolean>,
  ): Promise<Boolean | null> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient

    try {
      const mobileDevice = await prisma.mobileDevice.findFirst({
        where: { id: { equals: id } },
      })
      if (!mobileDevice) throw Error('not found device')
      const expired = mobileDevice.expireAt < new Date()

      const expireAt: Date = expired
        ? addMonths(mobileDevice.expireAt, Months)
        : addMonths(new Date(), Months)

      await prisma.mobileDevice.update({
        where: { id },
        data: { expireAt },
      })
      publish(true)
      return true
    } catch (error) {
      throw Error("an error occurred, Mobile device isn't registered!")
    }
  }
}
