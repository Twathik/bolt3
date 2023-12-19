import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateWithoutWorkingListInput } from "../inputs/ClinicalEventCreateWithoutWorkingListInput";
import { ClinicalEventWhereUniqueInput } from "../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.InputType("ClinicalEventCreateOrConnectWithoutWorkingListInput", {})
export class ClinicalEventCreateOrConnectWithoutWorkingListInput {
  @TypeGraphQL.Field(_type => ClinicalEventWhereUniqueInput, {
    nullable: false
  })
  where!: ClinicalEventWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClinicalEventCreateWithoutWorkingListInput, {
    nullable: false
  })
  create!: ClinicalEventCreateWithoutWorkingListInput;
}
