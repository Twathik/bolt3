import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionOrderByWithAggregationInput } from "../../../inputs/PrescriptionOrderByWithAggregationInput";
import { PrescriptionScalarWhereWithAggregatesInput } from "../../../inputs/PrescriptionScalarWhereWithAggregatesInput";
import { PrescriptionWhereInput } from "../../../inputs/PrescriptionWhereInput";
import { PrescriptionScalarFieldEnum } from "../../../../enums/PrescriptionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPrescriptionArgs {
  @TypeGraphQL.Field(_type => PrescriptionWhereInput, {
    nullable: true
  })
  where?: PrescriptionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PrescriptionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PrescriptionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "clinicalEventId" | "savedPrescription" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => PrescriptionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PrescriptionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
