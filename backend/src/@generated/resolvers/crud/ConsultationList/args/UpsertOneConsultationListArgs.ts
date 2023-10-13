import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationListCreateInput } from "../../../inputs/ConsultationListCreateInput";
import { ConsultationListUpdateInput } from "../../../inputs/ConsultationListUpdateInput";
import { ConsultationListWhereUniqueInput } from "../../../inputs/ConsultationListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneConsultationListArgs {
  @TypeGraphQL.Field(_type => ConsultationListWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationListWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationListCreateInput, {
    nullable: false
  })
  create!: ConsultationListCreateInput;

  @TypeGraphQL.Field(_type => ConsultationListUpdateInput, {
    nullable: false
  })
  update!: ConsultationListUpdateInput;
}
