import * as TypeGraphQL from 'type-graphql'
import {
  WorkingListUpdateInput,
  WorkingListWhereUniqueInput,
} from '../../../@generated'

@TypeGraphQL.ArgsType()
export class UpdateOneWorkingListArgs {
  @TypeGraphQL.Field((_type) => WorkingListUpdateInput, {
    nullable: false,
  })
  data!: WorkingListUpdateInput

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string

  @TypeGraphQL.Field((_type) => WorkingListWhereUniqueInput, {
    nullable: false,
  })
  where!: WorkingListWhereUniqueInput
}
