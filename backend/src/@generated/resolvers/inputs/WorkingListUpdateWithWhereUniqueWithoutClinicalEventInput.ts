import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListUpdateWithoutClinicalEventInput } from "../inputs/WorkingListUpdateWithoutClinicalEventInput";
import { WorkingListWhereUniqueInput } from "../inputs/WorkingListWhereUniqueInput";

@TypeGraphQL.InputType("WorkingListUpdateWithWhereUniqueWithoutClinicalEventInput", {})
export class WorkingListUpdateWithWhereUniqueWithoutClinicalEventInput {
  @TypeGraphQL.Field(_type => WorkingListWhereUniqueInput, {
    nullable: false
  })
  where!: WorkingListWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkingListUpdateWithoutClinicalEventInput, {
    nullable: false
  })
  data!: WorkingListUpdateWithoutClinicalEventInput;
}
