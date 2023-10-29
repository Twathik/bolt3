import * as TypeGraphQL from 'type-graphql'
import { closeAllTabsArgs } from './Args/CloseAllTabsArgs'

export class CloseAllTabsMutation {
  @TypeGraphQL.Mutation((_returns) => Boolean)
  async closeAllTabs(
    @TypeGraphQL.Args() { message }: closeAllTabsArgs,
    @TypeGraphQL.PubSub('CLOSE_ALL_TABS')
    publish: TypeGraphQL.Publisher<string>,
  ): Promise<Boolean> {
    await publish(message)
    return true
  }
}
