import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { MobileDevice } from '../../@generated'
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../@generated/helpers'
import { UpdateOneMobileDeviceArgs } from './Args/UpdateOneMobileDeviceArgs'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'

@TypeGraphQL.Resolver((_of) => MobileDevice)
export class UpdateOneMobileDeviceResolver {
  @TypeGraphQL.Mutation((_returns) => MobileDevice, {
    nullable: true,
  })
  async updateOneMobileDevice(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: UpdateOneMobileDeviceArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<MobileDevice | null> {
    try {
      const { _count } = transformInfoIntoPrismaArgs(info)
      const result = await getPrismaFromContext(ctx).mobileDevice.update({
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

      return result
    } catch (error) {
      throw Error('Mobile Device : failed update')
    }
  }
}
