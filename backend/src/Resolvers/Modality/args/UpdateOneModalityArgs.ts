import * as TypeGraphQL from 'type-graphql'
import {
  ModalityUpdateInput,
  ModalityWhereUniqueInput,
} from '../../../@generated'

@TypeGraphQL.ArgsType()
export class UpdateOneModalityArgs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string
  @TypeGraphQL.Field((_type) => ModalityUpdateInput, {
    nullable: false,
  })
  data!: ModalityUpdateInput

  @TypeGraphQL.Field((_type) => ModalityWhereUniqueInput, {
    nullable: false,
  })
  where!: ModalityWhereUniqueInput
}
