import * as TypeGraphQL from 'type-graphql'
import { MobileDeviceWhereUniqueInput } from '../../../@generated'

@TypeGraphQL.ArgsType()
export class DeleteOneMobileDeviceArgs {
  @TypeGraphQL.Field((_type) => MobileDeviceWhereUniqueInput, {
    nullable: false,
  })
  where!: MobileDeviceWhereUniqueInput
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string
}
