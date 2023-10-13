import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationListUpdateInput } from "../../../inputs/ConsultationListUpdateInput";
import { ConsultationListWhereUniqueInput } from "../../../inputs/ConsultationListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneConsultationListArgs {
  @TypeGraphQL.Field(_type => ConsultationListUpdateInput, {
    nullable: false
  })
  data!: ConsultationListUpdateInput;

  @TypeGraphQL.Field(_type => ConsultationListWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationListWhereUniqueInput;
}
