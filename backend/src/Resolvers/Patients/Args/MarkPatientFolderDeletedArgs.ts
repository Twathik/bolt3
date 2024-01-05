import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ArgsType()
export class MarkPatientFolderDeletedArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string
}
