import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateWithoutUserInput } from "../inputs/ClinicalEventCreateWithoutUserInput";
import { ClinicalEventUpdateWithoutUserInput } from "../inputs/ClinicalEventUpdateWithoutUserInput";
import { ClinicalEventWhereUniqueInput } from "../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.InputType("ClinicalEventUpsertWithWhereUniqueWithoutUserInput", {})
export class ClinicalEventUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ClinicalEventWhereUniqueInput, {
    nullable: false
  })
  where!: ClinicalEventWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClinicalEventUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ClinicalEventUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ClinicalEventCreateWithoutUserInput, {
    nullable: false
  })
  create!: ClinicalEventCreateWithoutUserInput;
}
