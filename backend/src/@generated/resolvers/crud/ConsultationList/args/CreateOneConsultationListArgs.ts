import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationListCreateInput } from "../../../inputs/ConsultationListCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneConsultationListArgs {
  @TypeGraphQL.Field(_type => ConsultationListCreateInput, {
    nullable: false
  })
  data!: ConsultationListCreateInput;
}
