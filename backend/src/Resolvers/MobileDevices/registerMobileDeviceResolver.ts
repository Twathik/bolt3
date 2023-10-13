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
export class UpdateOneMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => MobileDevice, {
    nullable: true,
  })
  async registerOneMobileDevice(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { accessToken, uuid }: RegisterOneMobileDeviceArgs,
  ): Promise<MobileDevice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient

    try {
      const mobileDevice = await prisma.mobileDevice.findFirst({
        where: { accessToken: { equals: accessToken } },
      })
      if (!mobileDevice) throw Error()
      if (mobileDevice.expireAt < new Date()) throw Error()

      return prisma.mobileDevice.update({
        where: { accessToken: accessToken },
        data: {
          uuid,
        },
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
    } catch (error) {
      throw Error("an error occurred, Mobile device isn't registered!")
    }
  }
}
