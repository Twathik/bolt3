import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListUpdateWithoutPatientInput } from "../inputs/WorkingListUpdateWithoutPatientInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListUpdateWithWhereUniqueWithoutPatientInput", {})
export class WorkingListUpdateWithWhereUniqueWithoutPatientInput {
  @TypeGraphQL.Field(_type => WorkingListWhereUniqueInput, {
    nullable: false
  })
  where!: WorkingListWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkingListUpdateWithoutPatientInput, {
    nullable: false
  })
  data!: WorkingListUpdateWithoutPatientInput;
}
