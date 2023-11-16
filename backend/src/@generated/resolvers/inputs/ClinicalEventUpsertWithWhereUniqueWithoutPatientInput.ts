import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateWithoutPatientInput } from "../inputs/ClinicalEventCreateWithoutPatientInput";
import { ClinicalEventUpdateWithoutPatientInput } from "../inputs/ClinicalEventUpdateWithoutPatientInput";
import { ClinicalEventWhereUniqueInput } from "../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.InputType("ClinicalEventUpsertWithWhereUniqueWithoutPatientInput", {})
export class ClinicalEventUpsertWithWhereUniqueWithoutPatientInput {
  @TypeGraphQL.Field(_type => ClinicalEventWhereUniqueInput, {
    nullable: false
  })
  where!: ClinicalEventWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClinicalEventUpdateWithoutPatientInput, {
    nullable: false
  })
  update!: ClinicalEventUpdateWithoutPatientInput;

  @TypeGraphQL.Field(_type => ClinicalEventCreateWithoutPatientInput, {
    nullable: false
  })
  create!: ClinicalEventCreateWithoutPatientInput;
}
