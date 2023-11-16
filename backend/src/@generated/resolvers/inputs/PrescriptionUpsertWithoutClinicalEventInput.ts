import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionCreateWithoutClinicalEventInput } from "../inputs/PrescriptionCreateWithoutClinicalEventInput";
import { PrescriptionUpdateWithoutClinicalEventInput } from "../inputs/PrescriptionUpdateWithoutClinicalEventInput";
import { PrescriptionWhereInput } from "../inputs/PrescriptionWhereInput";

@TypeGraphQL.InputType("PrescriptionUpsertWithoutClinicalEventInput", {})
export class PrescriptionUpsertWithoutClinicalEventInput {
  @TypeGraphQL.Field(_type => PrescriptionUpdateWithoutClinicalEventInput, {
    nullable: false
  })
  update!: PrescriptionUpdateWithoutClinicalEventInput;

  @TypeGraphQL.Field(_type => PrescriptionCreateWithoutClinicalEventInput, {
    nullable: false
  })
  create!: PrescriptionCreateWithoutClinicalEventInput;

  @TypeGraphQL.Field(_type => PrescriptionWhereInput, {
    nullable: true
  })
  where?: PrescriptionWhereInput | undefined;
}
