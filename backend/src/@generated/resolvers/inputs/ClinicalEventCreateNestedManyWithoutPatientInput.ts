import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateManyPatientInputEnvelope } from "../inputs/ClinicalEventCreateManyPatientInputEnvelope";
import { ClinicalEventCreateOrConnectWithoutPatientInput } from "../inputs/ClinicalEventCreateOrConnectWithoutPatientInput";
import { ClinicalEventCreateWithoutPatientInput } from "../inputs/ClinicalEventCreateWithoutPatientInput";
import { ClinicalEventWhereUniqueInput } from "../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.InputType("ClinicalEventCreateNestedManyWithoutPatientInput", {})
export class ClinicalEventCreateNestedManyWithoutPatientInput {
  @TypeGraphQL.Field(_type => [ClinicalEventCreateWithoutPatientInput], {
    nullable: true
  })
  create?: ClinicalEventCreateWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventCreateOrConnectWithoutPatientInput], {
    nullable: true
  })
  connectOrCreate?: ClinicalEventCreateOrConnectWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventCreateManyPatientInputEnvelope, {
    nullable: true
  })
  createMany?: ClinicalEventCreateManyPatientInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventWhereUniqueInput], {
    nullable: true
  })
  connect?: ClinicalEventWhereUniqueInput[] | undefined;
}
