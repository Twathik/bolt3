import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionCreateOrConnectWithoutClinicalEventInput } from "../inputs/PrescriptionCreateOrConnectWithoutClinicalEventInput";
import { PrescriptionCreateWithoutClinicalEventInput } from "../inputs/PrescriptionCreateWithoutClinicalEventInput";
import { PrescriptionWhereUniqueInput } from "../inputs/PrescriptionWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionCreateNestedOneWithoutClinicalEventInput", {})
export class PrescriptionCreateNestedOneWithoutClinicalEventInput {
  @TypeGraphQL.Field(_type => PrescriptionCreateWithoutClinicalEventInput, {
    nullable: true
  })
  create?: PrescriptionCreateWithoutClinicalEventInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionCreateOrConnectWithoutClinicalEventInput, {
    nullable: true
  })
  connectOrCreate?: PrescriptionCreateOrConnectWithoutClinicalEventInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionWhereUniqueInput, {
    nullable: true
  })
  connect?: PrescriptionWhereUniqueInput | undefined;
}
