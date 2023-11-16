import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateManyPatientInputEnvelope } from "../inputs/ClinicalEventCreateManyPatientInputEnvelope";
import { ClinicalEventCreateOrConnectWithoutPatientInput } from "../inputs/ClinicalEventCreateOrConnectWithoutPatientInput";
import { ClinicalEventCreateWithoutPatientInput } from "../inputs/ClinicalEventCreateWithoutPatientInput";
import { ClinicalEventScalarWhereInput } from "../inputs/ClinicalEventScalarWhereInput";
import { ClinicalEventUpdateManyWithWhereWithoutPatientInput } from "../inputs/ClinicalEventUpdateManyWithWhereWithoutPatientInput";
import { ClinicalEventUpdateWithWhereUniqueWithoutPatientInput } from "../inputs/ClinicalEventUpdateWithWhereUniqueWithoutPatientInput";
import { ClinicalEventUpsertWithWhereUniqueWithoutPatientInput } from "../inputs/ClinicalEventUpsertWithWhereUniqueWithoutPatientInput";
import { ClinicalEventWhereUniqueInput } from "../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.InputType("ClinicalEventUpdateManyWithoutPatientNestedInput", {})
export class ClinicalEventUpdateManyWithoutPatientNestedInput {
  @TypeGraphQL.Field(_type => [ClinicalEventCreateWithoutPatientInput], {
    nullable: true
  })
  create?: ClinicalEventCreateWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventCreateOrConnectWithoutPatientInput], {
    nullable: true
  })
  connectOrCreate?: ClinicalEventCreateOrConnectWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventUpsertWithWhereUniqueWithoutPatientInput], {
    nullable: true
  })
  upsert?: ClinicalEventUpsertWithWhereUniqueWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventCreateManyPatientInputEnvelope, {
    nullable: true
  })
  createMany?: ClinicalEventCreateManyPatientInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventWhereUniqueInput], {
    nullable: true
  })
  set?: ClinicalEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ClinicalEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventWhereUniqueInput], {
    nullable: true
  })
  delete?: ClinicalEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventWhereUniqueInput], {
    nullable: true
  })
  connect?: ClinicalEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventUpdateWithWhereUniqueWithoutPatientInput], {
    nullable: true
  })
  update?: ClinicalEventUpdateWithWhereUniqueWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventUpdateManyWithWhereWithoutPatientInput], {
    nullable: true
  })
  updateMany?: ClinicalEventUpdateManyWithWhereWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ClinicalEventScalarWhereInput[] | undefined;
}
