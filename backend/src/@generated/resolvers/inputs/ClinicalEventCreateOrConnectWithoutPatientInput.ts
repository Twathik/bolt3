import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateWithoutPatientInput } from "../inputs/ClinicalEventCreateWithoutPatientInput";
import { ClinicalEventWhereUniqueInput } from "../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.InputType("ClinicalEventCreateOrConnectWithoutPatientInput", {})
export class ClinicalEventCreateOrConnectWithoutPatientInput {
  @TypeGraphQL.Field(_type => ClinicalEventWhereUniqueInput, {
    nullable: false
  })
  where!: ClinicalEventWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClinicalEventCreateWithoutPatientInput, {
    nullable: false
  })
  create!: ClinicalEventCreateWithoutPatientInput;
}
