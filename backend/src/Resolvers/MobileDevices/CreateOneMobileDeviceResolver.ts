import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { CreateOneMobileDeviceArgs, MobileDevice } from '../../@generated'
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class CreateOneMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => MobileDevice, {
    nullable: false,
  })
  async createOneMobileDevice(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneMobileDeviceArgs,
  ): Promise<MobileDevice> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient

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
      const mobileDevices = await getPrismaFromContext(ctx).mobileDevice.create(
        {
          ...args,
          ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        },
      )
      return mobileDevices
    } catch (error) {
      console.log({ error })
      throw Error('An error has occurred, the mobile Devices was not created')
    }
  }
}
