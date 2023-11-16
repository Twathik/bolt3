import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateOrConnectWithoutPrescriptionInput } from "../inputs/ClinicalEventCreateOrConnectWithoutPrescriptionInput";
import { ClinicalEventCreateWithoutPrescriptionInput } from "../inputs/ClinicalEventCreateWithoutPrescriptionInput";
import { ClinicalEventUpdateToOneWithWhereWithoutPrescriptionInput } from "../inputs/ClinicalEventUpdateToOneWithWhereWithoutPrescriptionInput";
import { ClinicalEventUpsertWithoutPrescriptionInput } from "../inputs/ClinicalEventUpsertWithoutPrescriptionInput";
import { ClinicalEventWhereUniqueInput } from "../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.InputType("ClinicalEventUpdateOneRequiredWithoutPrescriptionNestedInput", {})
export class ClinicalEventUpdateOneRequiredWithoutPrescriptionNestedInput {
  @TypeGraphQL.Field(_type => ClinicalEventCreateWithoutPrescriptionInput, {
    nullable: true
  })
  create?: ClinicalEventCreateWithoutPrescriptionInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventCreateOrConnectWithoutPrescriptionInput, {
    nullable: true
  })
  connectOrCreate?: ClinicalEventCreateOrConnectWithoutPrescriptionInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventUpsertWithoutPrescriptionInput, {
    nullable: true
  })
  upsert?: ClinicalEventUpsertWithoutPrescriptionInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventWhereUniqueInput, {
    nullable: true
  })
  connect?: ClinicalEventWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventUpdateToOneWithWhereWithoutPrescriptionInput, {
    nullable: true
  })
  update?: ClinicalEventUpdateToOneWithWhereWithoutPrescriptionInput | undefined;
}
