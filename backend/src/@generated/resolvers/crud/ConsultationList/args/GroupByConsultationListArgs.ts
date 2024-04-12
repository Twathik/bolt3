import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationListOrderByWithAggregationInput } from "../../../inputs/ConsultationListOrderByWithAggregationInput";
import { ConsultationListScalarWhereWithAggregatesInput } from "../../../inputs/ConsultationListScalarWhereWithAggregatesInput";
import { ConsultationListWhereInput } from "../../../inputs/ConsultationListWhereInput";
import { ConsultationListScalarFieldEnum } from "../../../../enums/ConsultationListScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByConsultationListArgs {
  @TypeGraphQL.Field(_type => ConsultationListWhereInput, {
    nullable: true
  })
  where?: ConsultationListWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ConsultationListOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "patientId" | "active" | "consultationDate" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => ConsultationListScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ConsultationListScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
