import * as TypeGraphQL from 'type-graphql'

export enum AppSubscriptionPayloadType {
  closeAllTabs = 'closeAllTabs',
  secondaryDisplay = 'secondaryDisplay',
  emptyTrash = 'emptyTrash',
}
TypeGraphQL.registerEnumType(AppSubscriptionPayloadType, {
  name: 'AppSubscriptionPayloadType',
  description: '',
})
