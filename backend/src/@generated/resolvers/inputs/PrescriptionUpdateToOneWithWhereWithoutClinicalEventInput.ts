import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionUpdateWithoutClinicalEventInput } from "../inputs/PrescriptionUpdateWithoutClinicalEventInput";
import { PrescriptionWhereInput } from "../inputs/PrescriptionWhereInput";

@TypeGraphQL.InputType("PrescriptionUpdateToOneWithWhereWithoutClinicalEventInput", {})
export class PrescriptionUpdateToOneWithWhereWithoutClinicalEventInput {
  @TypeGraphQL.Field(_type => PrescriptionWhereInput, {
    nullable: true
  })
  where?: PrescriptionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionUpdateWithoutClinicalEventInput, {
    nullable: false
  })
  data!: PrescriptionUpdateWithoutClinicalEventInput;
}
