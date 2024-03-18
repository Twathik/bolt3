import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ArgsType()
export class RegisterOneMobileDeviceArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  uuid!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  accessToken!: string
}
