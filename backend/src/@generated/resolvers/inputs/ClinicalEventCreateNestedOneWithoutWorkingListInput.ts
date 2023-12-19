import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateOrConnectWithoutWorkingListInput } from "../inputs/ClinicalEventCreateOrConnectWithoutWorkingListInput";
import { ClinicalEventCreateWithoutWorkingListInput } from "../inputs/ClinicalEventCreateWithoutWorkingListInput";
import { ClinicalEventWhereUniqueInput } from "../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.InputType("ClinicalEventCreateNestedOneWithoutWorkingListInput", {})
export class ClinicalEventCreateNestedOneWithoutWorkingListInput {
  @TypeGraphQL.Field(_type => ClinicalEventCreateWithoutWorkingListInput, {
    nullable: true
  })
  create?: ClinicalEventCreateWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventCreateOrConnectWithoutWorkingListInput, {
    nullable: true
  })
  connectOrCreate?: ClinicalEventCreateOrConnectWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventWhereUniqueInput, {
    nullable: true
  })
  connect?: ClinicalEventWhereUniqueInput | undefined;
}
