import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationListWhereUniqueInput } from "../../../inputs/ConsultationListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneConsultationListArgs {
  @TypeGraphQL.Field(_type => ConsultationListWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationListWhereUniqueInput;
}
