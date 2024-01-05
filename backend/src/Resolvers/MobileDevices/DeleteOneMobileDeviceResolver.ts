import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { MobileDevice } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'
import { DeleteOneMobileDeviceArgs } from './Args/DeleteOneMobileDeviceArgs'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class DeleteOneMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => MobileDevice, {
    nullable: true,
  })
  async deleteOneMobileDevice(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: DeleteOneMobileDeviceArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<MobileDevice | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    try {
      const result = await getPrismaFromContext(ctx).mobileDevice.delete({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
      const { id, accessToken, connected, expireAt, mobileDeviceType, uuid } =
        result

      await notify({
        type: 'mobileDeviceUpdate',
        userId,
        global: true,
        appPayload: JSON.stringify({
          operation: 'delete',
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

      return result
    } catch (error) {
      throw Error('deletion failed')
    }
  }
}
