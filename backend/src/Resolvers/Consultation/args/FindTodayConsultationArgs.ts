import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ArgsType()
export class FindTodayConsultationArgs {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  day!: number

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  month!: number

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  year!: number
}
