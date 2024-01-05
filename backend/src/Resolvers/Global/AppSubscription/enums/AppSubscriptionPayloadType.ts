import * as TypeGraphQL from 'type-graphql'

export enum AppSubscriptionPayloadType {
  closeAllTabs = 'closeAllTabs',
  secondaryDisplay = 'secondaryDisplay',
  emptyTrash = 'emptyTrash',
  patientUpdate = 'patientUpdate',
  modalityUpdate = 'modalityUpdate',
  mobileDeviceUpdate = 'mobileDeviceUpdate',
  clinicalEvents = 'clinicalEvents',
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
  | 'clinicalEvents'
  | 'workingLists'
  | 'consultationLists'
