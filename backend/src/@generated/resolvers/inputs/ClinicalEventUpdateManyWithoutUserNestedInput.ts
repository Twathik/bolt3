import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateManyUserInputEnvelope } from "../inputs/ClinicalEventCreateManyUserInputEnvelope";
import { ClinicalEventCreateOrConnectWithoutUserInput } from "../inputs/ClinicalEventCreateOrConnectWithoutUserInput";
import { ClinicalEventCreateWithoutUserInput } from "../inputs/ClinicalEventCreateWithoutUserInput";
import { ClinicalEventScalarWhereInput } from "../inputs/ClinicalEventScalarWhereInput";
import { ClinicalEventUpdateManyWithWhereWithoutUserInput } from "../inputs/ClinicalEventUpdateManyWithWhereWithoutUserInput";
import { ClinicalEventUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ClinicalEventUpdateWithWhereUniqueWithoutUserInput";
import { ClinicalEventUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ClinicalEventUpsertWithWhereUniqueWithoutUserInput";
import { ClinicalEventWhereUniqueInput } from "../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.InputType("ClinicalEventUpdateManyWithoutUserNestedInput", {})
export class ClinicalEventUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [ClinicalEventCreateWithoutUserInput], {
    nullable: true
  })
  create?: ClinicalEventCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ClinicalEventCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ClinicalEventUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ClinicalEventCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ClinicalEventUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ClinicalEventUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ClinicalEventUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ClinicalEventScalarWhereInput[] | undefined;
}
