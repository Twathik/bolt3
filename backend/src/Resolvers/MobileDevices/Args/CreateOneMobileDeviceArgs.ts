import * as TypeGraphQL from 'type-graphql'
import { MobileDeviceCreateInput } from '../../../@generated'

@TypeGraphQL.ArgsType()
export class CreateOneMobileDeviceArgs {
  @TypeGraphQL.Field((_type) => MobileDeviceCreateInput, {
    nullable: false,
  })
  data!: MobileDeviceCreateInput
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string
}
