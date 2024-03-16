import * as TypeGraphQL from 'type-graphql'

import { AppSubscriptionModel } from './model/AppSubscriptionModel'
import { AppSubscriptionTriggerArgs } from './args/AppSubscriptionTriggerArgs'
import { v4 as uuid } from 'uuid'
import { AppSubscriptionArgs } from './args/AppSubscriptionArgs'

@TypeGraphQL.Resolver((_of) => AppSubscriptionModel)
export class AppSubscription {
  @TypeGraphQL.Subscription((_returns) => AppSubscriptionModel, {
    topics: 'APP_SUBSCRIPTION',
    filter: ({
      payload,
      args,
    }: {
      payload: AppSubscriptionTriggerArgs
      args: AppSubscriptionArgs
    }) => {
      if (payload.global) {
        console.log({
          global: true,
          payload: payload.subscriptionSpecificId,
          arg: args.subscriptionSpecificId,
        })
        if (payload?.subscriptionSpecificId) {
          console.log(
            args.subscriptionSpecificId.includes(
              payload.subscriptionSpecificId,
            ),
          )
          return args.subscriptionSpecificId.includes(
            payload.subscriptionSpecificId,
          )
        }
        return payload.global
      } else {
        console.log({
          global: false,
          payload: payload.subscriptionSpecificId,
          arg: args.subscriptionSpecificId,
        })
        if (payload.subscriptionSpecificId) {
          return (
            args.subscriptionSpecificId.includes(
              payload.subscriptionSpecificId,
            ) && args.userId === payload.userId
          )
        }
        return args.userId === payload.userId
      }
    },
  })
  appSubscription(
    @TypeGraphQL.Root() { userId, ...payload }: AppSubscriptionTriggerArgs,
    @TypeGraphQL.Args() _args: AppSubscriptionArgs,
  ): AppSubscriptionModel {
    return { ...payload, messageId: uuid() }
  }
}
