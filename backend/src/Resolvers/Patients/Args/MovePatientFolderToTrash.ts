import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ArgsType()
export class MovePatientFolderToTrash {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  onTrash!: boolean
}
