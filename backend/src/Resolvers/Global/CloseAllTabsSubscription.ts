import * as TypeGraphQL from 'type-graphql'
import { CloseAllTabsMessage } from './Model/CloseAllTabsMessage'

@TypeGraphQL.Resolver((_of) => CloseAllTabsMessage)
export class CloseAllTabsResolver {
  @TypeGraphQL.Subscription((_returns) => CloseAllTabsMessage, {
    topics: 'CLOSE_ALL_TABS',
  })
  closeAllTabs(
    @TypeGraphQL.Root() notificationPayload: string,
  ): CloseAllTabsMessage {
    return { message: notificationPayload }
  }
}
