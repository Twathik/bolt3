import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationCreateInput } from "../../../inputs/ConsultationCreateInput";
import { ConsultationUpdateInput } from "../../../inputs/ConsultationUpdateInput";
import { ConsultationWhereUniqueInput } from "../../../inputs/ConsultationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneConsultationArgs {
  @TypeGraphQL.Field(_type => ConsultationWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationCreateInput, {
    nullable: false
  })
  create!: ConsultationCreateInput;

  @TypeGraphQL.Field(_type => ConsultationUpdateInput, {
    nullable: false
  })
  update!: ConsultationUpdateInput;
}
