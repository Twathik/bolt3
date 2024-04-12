import * as TypeGraphQL from 'type-graphql'
import { ConsultationListWhereUniqueInput } from '../../../@generated'

@TypeGraphQL.ArgsType()
export class DeleteOneConsultationListArgs {
  @TypeGraphQL.Field((_type) => ConsultationListWhereUniqueInput, {
    nullable: false,
  })
  where!: ConsultationListWhereUniqueInput
}
