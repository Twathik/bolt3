import * as TypeGraphQL from 'type-graphql'
import { InsertDataModel } from '../model/InsertDataModel'
import { InsertDataSubscriptionArgs } from '../args/InserDataSubscriptionArgs'
import { InsertDataPayload } from '../args/InsertDataPayload'

@TypeGraphQL.Resolver((_of) => InsertDataModel)
export class InsertDataSubscription {
  @TypeGraphQL.Subscription((_returns) => InsertDataModel, {
    topics: 'INSERT_DATA_IN_EDITOR',
    filter: ({ payload, args }) => {
      return args.clinicalEventId === payload.clinicalEventId
    },
  })
  async insertDataSubscription(
    @TypeGraphQL.Root() { clinicalEventId, ...payload }: InsertDataPayload,
    @TypeGraphQL.Ctx() _ctx: any,
    @TypeGraphQL.Args() _args: InsertDataSubscriptionArgs,
  ): Promise<InsertDataModel | null> {
    return payload
  }
}
