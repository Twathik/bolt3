import * as TypeGraphQL from 'type-graphql'
import {
  ConsultationListUpdateInput,
  ConsultationListWhereUniqueInput,
} from '../../../@generated'

@TypeGraphQL.ArgsType()
export class UpdateOneConsultationListArgs {
  @TypeGraphQL.Field((_type) => ConsultationListUpdateInput, {
    nullable: false,
  })
  data!: ConsultationListUpdateInput

  @TypeGraphQL.Field((_type) => ConsultationListWhereUniqueInput, {
    nullable: false,
  })
  where!: ConsultationListWhereUniqueInput

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string
}
