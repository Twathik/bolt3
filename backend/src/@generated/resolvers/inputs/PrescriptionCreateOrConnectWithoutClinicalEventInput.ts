import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionCreateWithoutClinicalEventInput } from "../inputs/PrescriptionCreateWithoutClinicalEventInput";
import { PrescriptionWhereUniqueInput } from "../inputs/PrescriptionWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionCreateOrConnectWithoutClinicalEventInput", {})
export class PrescriptionCreateOrConnectWithoutClinicalEventInput {
  @TypeGraphQL.Field(_type => PrescriptionWhereUniqueInput, {
    nullable: false
  })
  where!: PrescriptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PrescriptionCreateWithoutClinicalEventInput, {
    nullable: false
  })
  create!: PrescriptionCreateWithoutClinicalEventInput;
}
