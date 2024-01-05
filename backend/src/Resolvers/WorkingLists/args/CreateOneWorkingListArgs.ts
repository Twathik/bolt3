import * as TypeGraphQL from 'type-graphql'
import { WorkingListCreateInput } from '../../../@generated'

@TypeGraphQL.ArgsType()
export class CreateOneWorkingListArgs {
  @TypeGraphQL.Field((_type) => WorkingListCreateInput, {
    nullable: false,
  })
  data!: WorkingListCreateInput
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string
}
