import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateWithoutPrescriptionInput } from "../inputs/ClinicalEventCreateWithoutPrescriptionInput";
import { ClinicalEventWhereUniqueInput } from "../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.InputType("ClinicalEventCreateOrConnectWithoutPrescriptionInput", {})
export class ClinicalEventCreateOrConnectWithoutPrescriptionInput {
  @TypeGraphQL.Field(_type => ClinicalEventWhereUniqueInput, {
    nullable: false
  })
  where!: ClinicalEventWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClinicalEventCreateWithoutPrescriptionInput, {
    nullable: false
  })
  create!: ClinicalEventCreateWithoutPrescriptionInput;
}
