import * as TypeGraphQL from 'type-graphql'

export class TriggerGetAllMobileDevicesSubscriptionResolver {
  @TypeGraphQL.Mutation((_returns) => Boolean)
  async triggerGetAllMobileDevicesSubscription(
    @TypeGraphQL.PubSub('GET_ALL_MOBILE_DEVICES')
    publish: TypeGraphQL.Publisher<boolean>,
  ): Promise<Boolean> {
    await publish(true)
    return true
  }
}
