import * as TypeGraphQL from 'type-graphql'
import { AppSubscriptionTriggerArgs } from './args/AppSubscriptionTriggerArgs'

export class TriggerAppSubscription {
  @TypeGraphQL.Mutation((_returns) => Boolean)
  async triggerAppSubscription(
    @TypeGraphQL.Args() payload: AppSubscriptionTriggerArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    publish: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<Boolean> {
    await publish(payload)
    return true
  }
}
