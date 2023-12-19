import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkingListOrderByWithRelationInput } from "../../../inputs/WorkingListOrderByWithRelationInput";
import { WorkingListWhereInput } from "../../../inputs/WorkingListWhereInput";
import { WorkingListWhereUniqueInput } from "../../../inputs/WorkingListWhereUniqueInput";
import { WorkingListScalarFieldEnum } from "../../../../enums/WorkingListScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstWorkingListOrThrowArgs {
  @TypeGraphQL.Field(_type => WorkingListWhereInput, {
    nullable: true
  })
  where?: WorkingListWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WorkingListOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: WorkingListOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkingListWhereUniqueInput, {
    nullable: true
  })
  cursor?: WorkingListWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [WorkingListScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "patientId" | "modalityId" | "userId" | "clinicalEventId" | "modalityExamStatus" | "createdAt" | "updatedAt" | "linked" | "linkId" | "locked"> | undefined;
}
