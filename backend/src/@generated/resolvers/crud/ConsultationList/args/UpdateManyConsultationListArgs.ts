import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationListUpdateManyMutationInput } from "../../../inputs/ConsultationListUpdateManyMutationInput";
import { ConsultationListWhereInput } from "../../../inputs/ConsultationListWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyConsultationListArgs {
  @TypeGraphQL.Field(_type => ConsultationListUpdateManyMutationInput, {
    nullable: false
  })
  data!: ConsultationListUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ConsultationListWhereInput, {
    nullable: true
  })
  where?: ConsultationListWhereInput | undefined;
}
