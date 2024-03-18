import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ArgsType()
export class changeExpirationMobileDeviceArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  Months!: number
}
