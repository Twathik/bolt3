import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { DeleteOneMobileDeviceArgs, MobileDevice } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class DeleteOneMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => MobileDevice, {
    nullable: true,
  })
  async deleteOneMobileDevice(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneMobileDeviceArgs,
    @TypeGraphQL.PubSub('GET_ALL_MOBILE_DEVICES')
    publish: TypeGraphQL.Publisher<boolean>,
  ): Promise<MobileDevice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    try {
      const result = await getPrismaFromContext(ctx).mobileDevice.delete({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      publish(true)

      return result
    } catch (error) {
      throw Error('deletion failed')
    }
  }
}
