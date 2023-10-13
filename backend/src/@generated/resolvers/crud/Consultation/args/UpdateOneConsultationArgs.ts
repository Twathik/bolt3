import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationUpdateInput } from "../../../inputs/ConsultationUpdateInput";
import { ConsultationWhereUniqueInput } from "../../../inputs/ConsultationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneConsultationArgs {
  @TypeGraphQL.Field(_type => ConsultationUpdateInput, {
    nullable: false
  })
  data!: ConsultationUpdateInput;

  @TypeGraphQL.Field(_type => ConsultationWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationWhereUniqueInput;
}
