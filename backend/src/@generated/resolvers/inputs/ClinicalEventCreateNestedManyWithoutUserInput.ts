import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateManyUserInputEnvelope } from "../inputs/ClinicalEventCreateManyUserInputEnvelope";
import { ClinicalEventCreateOrConnectWithoutUserInput } from "../inputs/ClinicalEventCreateOrConnectWithoutUserInput";
import { ClinicalEventCreateWithoutUserInput } from "../inputs/ClinicalEventCreateWithoutUserInput";
import { ClinicalEventWhereUniqueInput } from "../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.InputType("ClinicalEventCreateNestedManyWithoutUserInput", {})
export class ClinicalEventCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ClinicalEventCreateWithoutUserInput], {
    nullable: true
  })
  create?: ClinicalEventCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ClinicalEventCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ClinicalEventCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ClinicalEventWhereUniqueInput], {
    nullable: true
  })
  connect?: ClinicalEventWhereUniqueInput[] | undefined;
}
