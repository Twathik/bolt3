import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventUpdateWithoutUserInput } from "../inputs/ClinicalEventUpdateWithoutUserInput";
import { ClinicalEventWhereUniqueInput } from "../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.InputType("ClinicalEventUpdateWithWhereUniqueWithoutUserInput", {})
export class ClinicalEventUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ClinicalEventWhereUniqueInput, {
    nullable: false
  })
  where!: ClinicalEventWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClinicalEventUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ClinicalEventUpdateWithoutUserInput;
}
