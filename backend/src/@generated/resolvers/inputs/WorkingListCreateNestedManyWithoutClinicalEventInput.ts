import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateManyClinicalEventInputEnvelope } from "../inputs/WorkingListCreateManyClinicalEventInputEnvelope";
import { WorkingListCreateOrConnectWithoutClinicalEventInput } from "../inputs/WorkingListCreateOrConnectWithoutClinicalEventInput";
import { WorkingListCreateWithoutClinicalEventInput } from "../inputs/WorkingListCreateWithoutClinicalEventInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListCreateNestedManyWithoutClinicalEventInput", {})
export class WorkingListCreateNestedManyWithoutClinicalEventInput {
  @TypeGraphQL.Field(_type => [WorkingListCreateWithoutClinicalEventInput], {
    nullable: true
  })
  create?: WorkingListCreateWithoutClinicalEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkingListCreateOrConnectWithoutClinicalEventInput], {
    nullable: true
  })
  connectOrCreate?: WorkingListCreateOrConnectWithoutClinicalEventInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkingListCreateManyClinicalEventInputEnvelope, {
    nullable: true
  })
  createMany?: WorkingListCreateManyClinicalEventInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkingListWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkingListWhereUniqueInput[] | undefined;
}
