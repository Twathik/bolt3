import * as TypeGraphQL from 'type-graphql'

export enum AppSubscriptionPayloadType {
  closeAllTabs = 'closeAllTabs',
  secondaryDisplay = 'secondaryDisplay',
  emptyTrash = 'emptyTrash',
  patientUpdate = 'patientUpdate',
  modalityUpdate = 'modalityUpdate',
  mobileDeviceUpdate = 'mobileDeviceUpdate',
  focusedDocument = 'focusedDocument',
  workingLists = 'workingLists',
  consultationLists = 'consultationLists',
}
TypeGraphQL.registerEnumType(AppSubscriptionPayloadType, {
  name: 'AppSubscriptionPayloadType',
  description: '',
})

export type AppSubscriptionPayloadEnumType =
  | 'closeAllTabs'
  | 'secondaryDisplay'
  | 'emptyTrash'
  | 'patientUpdate'
  | 'modalityUpdate'
  | 'mobileDeviceUpdate'
  | 'workingLists'
  | 'consultationLists'
  | 'focusedDocument'
