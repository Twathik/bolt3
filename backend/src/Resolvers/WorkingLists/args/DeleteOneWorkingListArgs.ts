import * as TypeGraphQL from 'type-graphql'
import { WorkingListWhereUniqueInput } from '../../../@generated'

@TypeGraphQL.ArgsType()
export class DeleteOneWorkingListArgs {
  @TypeGraphQL.Field((_type) => WorkingListWhereUniqueInput, {
    nullable: false,
  })
  where!: WorkingListWhereUniqueInput

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string
}
