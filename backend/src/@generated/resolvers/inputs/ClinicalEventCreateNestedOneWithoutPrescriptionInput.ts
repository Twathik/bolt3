import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateOrConnectWithoutPrescriptionInput } from "../inputs/ClinicalEventCreateOrConnectWithoutPrescriptionInput";
import { ClinicalEventCreateWithoutPrescriptionInput } from "../inputs/ClinicalEventCreateWithoutPrescriptionInput";
import { ClinicalEventWhereUniqueInput } from "../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.InputType("ClinicalEventCreateNestedOneWithoutPrescriptionInput", {})
export class ClinicalEventCreateNestedOneWithoutPrescriptionInput {
  @TypeGraphQL.Field(_type => ClinicalEventCreateWithoutPrescriptionInput, {
    nullable: true
  })
  create?: ClinicalEventCreateWithoutPrescriptionInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventCreateOrConnectWithoutPrescriptionInput, {
    nullable: true
  })
  connectOrCreate?: ClinicalEventCreateOrConnectWithoutPrescriptionInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventWhereUniqueInput, {
    nullable: true
  })
  connect?: ClinicalEventWhereUniqueInput | undefined;
}
