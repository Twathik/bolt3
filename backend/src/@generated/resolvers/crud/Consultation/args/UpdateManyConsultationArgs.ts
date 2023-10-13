import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationUpdateManyMutationInput } from "../../../inputs/ConsultationUpdateManyMutationInput";
import { ConsultationWhereInput } from "../../../inputs/ConsultationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyConsultationArgs {
  @TypeGraphQL.Field(_type => ConsultationUpdateManyMutationInput, {
    nullable: false
  })
  data!: ConsultationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ConsultationWhereInput, {
    nullable: true
  })
  where?: ConsultationWhereInput | undefined;
}
