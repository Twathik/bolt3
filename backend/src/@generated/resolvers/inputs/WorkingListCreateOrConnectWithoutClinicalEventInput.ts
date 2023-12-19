import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateWithoutClinicalEventInput } from "../inputs/WorkingListCreateWithoutClinicalEventInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListCreateOrConnectWithoutClinicalEventInput", {})
export class WorkingListCreateOrConnectWithoutClinicalEventInput {
  @TypeGraphQL.Field(_type => WorkingListWhereUniqueInput, {
    nullable: false
  })
  where!: WorkingListWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkingListCreateWithoutClinicalEventInput, {
    nullable: false
  })
  create!: WorkingListCreateWithoutClinicalEventInput;
}
