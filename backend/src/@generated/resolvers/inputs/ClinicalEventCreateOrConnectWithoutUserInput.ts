import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateWithoutUserInput } from "../inputs/ClinicalEventCreateWithoutUserInput";
import { ClinicalEventWhereUniqueInput } from "../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.InputType("ClinicalEventCreateOrConnectWithoutUserInput", {})
export class ClinicalEventCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ClinicalEventWhereUniqueInput, {
    nullable: false
  })
  where!: ClinicalEventWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClinicalEventCreateWithoutUserInput, {
    nullable: false
  })
  create!: ClinicalEventCreateWithoutUserInput;
}
