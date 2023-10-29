import * as TypeGraphQL from 'type-graphql'
import { FindManyMobileDeviceArgs, MobileDevice } from '../../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../../@generated/helpers'
import { GraphQLResolveInfo } from 'graphql'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class GetMobilesSubscriptionResolver {
  @TypeGraphQL.Subscription((_returns) => [MobileDevice], {
    topics: 'GET_ALL_MOBILE_DEVICES',
  })
  async getMobileDevicesList(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMobileDeviceArgs,
  ): Promise<MobileDevice[]> {
    const { _count } = transformInfoIntoPrismaArgs(info)

    return getPrismaFromContext(ctx).mobileDevice.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    })
  }
}
