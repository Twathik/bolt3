import * as TypeGraphQL from 'type-graphql'
import { ClinicalEventWhereUniqueInput } from '../../../@generated'

@TypeGraphQL.ArgsType()
export class DeleteOneClinicalEventArgs {
  @TypeGraphQL.Field((_type) => ClinicalEventWhereUniqueInput, {
    nullable: false,
  })
  where!: ClinicalEventWhereUniqueInput

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  deletedReport!: string
}
