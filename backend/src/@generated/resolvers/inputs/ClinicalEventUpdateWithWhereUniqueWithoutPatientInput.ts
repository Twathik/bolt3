import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventUpdateWithoutPatientInput } from "../inputs/ClinicalEventUpdateWithoutPatientInput";
import { ClinicalEventWhereUniqueInput } from "../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.InputType("ClinicalEventUpdateWithWhereUniqueWithoutPatientInput", {})
export class ClinicalEventUpdateWithWhereUniqueWithoutPatientInput {
  @TypeGraphQL.Field(_type => ClinicalEventWhereUniqueInput, {
    nullable: false
  })
  where!: ClinicalEventWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClinicalEventUpdateWithoutPatientInput, {
    nullable: false
  })
  data!: ClinicalEventUpdateWithoutPatientInput;
}
