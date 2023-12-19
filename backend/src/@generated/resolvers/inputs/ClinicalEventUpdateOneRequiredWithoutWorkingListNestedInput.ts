import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateOrConnectWithoutWorkingListInput } from "../inputs/ClinicalEventCreateOrConnectWithoutWorkingListInput";
import { ClinicalEventCreateWithoutWorkingListInput } from "../inputs/ClinicalEventCreateWithoutWorkingListInput";
import { ClinicalEventUpdateToOneWithWhereWithoutWorkingListInput } from "../inputs/ClinicalEventUpdateToOneWithWhereWithoutWorkingListInput";
import { ClinicalEventUpsertWithoutWorkingListInput } from "../inputs/ClinicalEventUpsertWithoutWorkingListInput";
import { ClinicalEventWhereUniqueInput } from "../inputs/ClinicalEventWhereUniqueInput";

@TypeGraphQL.InputType("ClinicalEventUpdateOneRequiredWithoutWorkingListNestedInput", {})
export class ClinicalEventUpdateOneRequiredWithoutWorkingListNestedInput {
  @TypeGraphQL.Field(_type => ClinicalEventCreateWithoutWorkingListInput, {
    nullable: true
  })
  create?: ClinicalEventCreateWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventCreateOrConnectWithoutWorkingListInput, {
    nullable: true
  })
  connectOrCreate?: ClinicalEventCreateOrConnectWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventUpsertWithoutWorkingListInput, {
    nullable: true
  })
  upsert?: ClinicalEventUpsertWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventWhereUniqueInput, {
    nullable: true
  })
  connect?: ClinicalEventWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventUpdateToOneWithWhereWithoutWorkingListInput, {
    nullable: true
  })
  update?: ClinicalEventUpdateToOneWithWhereWithoutWorkingListInput | undefined;
}
