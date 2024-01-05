import * as TypeGraphQL from 'type-graphql'
import {
  ClinicalEventUpdateInput,
  ClinicalEventWhereUniqueInput,
} from '../../../@generated'

@TypeGraphQL.ArgsType()
export class UpdateOneClinicalEventArgs {
  @TypeGraphQL.Field((_type) => ClinicalEventUpdateInput, {
    nullable: false,
  })
  data!: ClinicalEventUpdateInput

  @TypeGraphQL.Field((_type) => ClinicalEventWhereUniqueInput, {
    nullable: false,
  })
  where!: ClinicalEventWhereUniqueInput

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string
}
