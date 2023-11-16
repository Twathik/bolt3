import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventUpdateWithoutPrescriptionInput } from "../inputs/ClinicalEventUpdateWithoutPrescriptionInput";
import { ClinicalEventWhereInput } from "../inputs/ClinicalEventWhereInput";

@TypeGraphQL.InputType("ClinicalEventUpdateToOneWithWhereWithoutPrescriptionInput", {})
export class ClinicalEventUpdateToOneWithWhereWithoutPrescriptionInput {
  @TypeGraphQL.Field(_type => ClinicalEventWhereInput, {
    nullable: true
  })
  where?: ClinicalEventWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventUpdateWithoutPrescriptionInput, {
    nullable: false
  })
  data!: ClinicalEventUpdateWithoutPrescriptionInput;
}
