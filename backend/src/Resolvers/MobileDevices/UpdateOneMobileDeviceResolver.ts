import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { MobileDevice, UpdateOneMobileDeviceArgs } from '../../@generated'
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../@generated/helpers'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class UpdateOneMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => MobileDevice, {
    nullable: true,
  })
  async updateOneMobileDevice(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneMobileDeviceArgs,
    @TypeGraphQL.PubSub('GET_ALL_MOBILE_DEVICES')
    publish: TypeGraphQL.Publisher<boolean>,
  ): Promise<MobileDevice | null> {
    try {
      const { _count } = transformInfoIntoPrismaArgs(info)
      const result = await getPrismaFromContext(ctx).mobileDevice.update({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      publish(true)
      return result
    } catch (error) {
      throw Error('Mobile Device : failed update')
    }
  }
}
