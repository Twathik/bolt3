import * as TypeGraphQL from 'type-graphql'
import { MobileDeviceType } from '../../../@generated'

@TypeGraphQL.ArgsType()
export class SwitchMobileDeviceArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string

  @TypeGraphQL.Field((_type) => MobileDeviceType, {
    nullable: false,
  })
  mobileDeviceType!: 'DOCTOR' | 'SECRETARY' | undefined
}
