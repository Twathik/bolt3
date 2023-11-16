import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateWithoutPrescriptionInput } from "../inputs/ClinicalEventCreateWithoutPrescriptionInput";
import { ClinicalEventUpdateWithoutPrescriptionInput } from "../inputs/ClinicalEventUpdateWithoutPrescriptionInput";
import { ClinicalEventWhereInput } from "../inputs/ClinicalEventWhereInput";

@TypeGraphQL.InputType("ClinicalEventUpsertWithoutPrescriptionInput", {})
export class ClinicalEventUpsertWithoutPrescriptionInput {
  @TypeGraphQL.Field(_type => ClinicalEventUpdateWithoutPrescriptionInput, {
    nullable: false
  })
  update!: ClinicalEventUpdateWithoutPrescriptionInput;

  @TypeGraphQL.Field(_type => ClinicalEventCreateWithoutPrescriptionInput, {
    nullable: false
  })
  create!: ClinicalEventCreateWithoutPrescriptionInput;

  @TypeGraphQL.Field(_type => ClinicalEventWhereInput, {
    nullable: true
  })
  where?: ClinicalEventWhereInput | undefined;
}
