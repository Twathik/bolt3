import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateWithoutPatientInput } from "../inputs/WorkingListCreateWithoutPatientInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListCreateOrConnectWithoutPatientInput", {})
export class WorkingListCreateOrConnectWithoutPatientInput {
  @TypeGraphQL.Field(_type => WorkingListWhereUniqueInput, {
    nullable: false
  })
  where!: WorkingListWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkingListCreateWithoutPatientInput, {
    nullable: false
  })
  create!: WorkingListCreateWithoutPatientInput;
}
