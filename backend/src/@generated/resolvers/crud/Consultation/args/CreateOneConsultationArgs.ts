import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationCreateInput } from "../../../inputs/ConsultationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneConsultationArgs {
  @TypeGraphQL.Field(_type => ConsultationCreateInput, {
    nullable: false
  })
  data!: ConsultationCreateInput;
}
