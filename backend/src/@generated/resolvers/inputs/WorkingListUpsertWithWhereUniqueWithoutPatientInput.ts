import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCreateWithoutPatientInput } from "../inputs/WorkingListCreateWithoutPatientInput";
import { WorkingListUpdateWithoutPatientInput } from "../inputs/WorkingListUpdateWithoutPatientInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListUpsertWithWhereUniqueWithoutPatientInput", {})
export class WorkingListUpsertWithWhereUniqueWithoutPatientInput {
  @TypeGraphQL.Field(_type => WorkingListWhereUniqueInput, {
    nullable: false
  })
  where!: WorkingListWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkingListUpdateWithoutPatientInput, {
    nullable: false
  })
  update!: WorkingListUpdateWithoutPatientInput;

  @TypeGraphQL.Field(_type => WorkingListCreateWithoutPatientInput, {
    nullable: false
  })
  create!: WorkingListCreateWithoutPatientInput;
}
