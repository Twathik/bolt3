import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationOrderByWithAggregationInput } from "../../../inputs/ConsultationOrderByWithAggregationInput";
import { ConsultationScalarWhereWithAggregatesInput } from "../../../inputs/ConsultationScalarWhereWithAggregatesInput";
import { ConsultationWhereInput } from "../../../inputs/ConsultationWhereInput";
import { ConsultationScalarFieldEnum } from "../../../../enums/ConsultationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByConsultationArgs {
  @TypeGraphQL.Field(_type => ConsultationWhereInput, {
    nullable: true
  })
  where?: ConsultationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ConsultationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ConsultationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "day" | "month" | "year" | "createdAt">;

  @TypeGraphQL.Field(_type => ConsultationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ConsultationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
