import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkingListOrderByWithAggregationInput } from "../../../inputs/WorkingListOrderByWithAggregationInput";
import { WorkingListScalarWhereWithAggregatesInput } from "../../../inputs/WorkingListScalarWhereWithAggregatesInput";
import { WorkingListWhereInput } from "../../../inputs/WorkingListWhereInput";
import { WorkingListScalarFieldEnum } from "../../../../enums/WorkingListScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWorkingListArgs {
  @TypeGraphQL.Field(_type => WorkingListWhereInput, {
    nullable: true
  })
  where?: WorkingListWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WorkingListOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: WorkingListOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "patientId" | "modalityId" | "userId" | "clinicalEventId" | "modalityExamStatus" | "createdAt" | "updatedAt" | "linked" | "linkId" | "locked">;

  @TypeGraphQL.Field(_type => WorkingListScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WorkingListScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
