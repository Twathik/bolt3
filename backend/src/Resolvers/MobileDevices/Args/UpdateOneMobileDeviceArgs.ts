import * as TypeGraphQL from 'type-graphql'
import {
  MobileDeviceUpdateInput,
  MobileDeviceWhereUniqueInput,
} from '../../../@generated'

@TypeGraphQL.ArgsType()
export class UpdateOneMobileDeviceArgs {
  @TypeGraphQL.Field((_type) => MobileDeviceUpdateInput, {
    nullable: false,
  })
  data!: MobileDeviceUpdateInput

  @TypeGraphQL.Field((_type) => MobileDeviceWhereUniqueInput, {
    nullable: false,
  })
  where!: MobileDeviceWhereUniqueInput
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string
}
