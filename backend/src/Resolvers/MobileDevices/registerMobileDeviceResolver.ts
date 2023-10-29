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

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class RegisterOneMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => MobileDevice, {
    nullable: true,
  })
  async registerOneMobileDevice(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { accessToken, uuid }: RegisterOneMobileDeviceArgs,
    @TypeGraphQL.PubSub('GET_ALL_MOBILE_DEVICES')
    publish: TypeGraphQL.Publisher<boolean>,
  ): Promise<MobileDevice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient

    try {
      const mobileDevice = await prisma.mobileDevice.findFirst({
        where: { accessToken: { equals: accessToken } },
      })
      if (!mobileDevice) throw Error()
      if (mobileDevice.expireAt < new Date()) throw Error()

      const result = await prisma.mobileDevice.update({
        where: { accessToken: accessToken },
        data: {
          uuid,
          connected: true,
        },
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      publish(true)
      return result
    } catch (error) {
      throw Error("an error occurred, Mobile device isn't registered!")
    }
  }
}
