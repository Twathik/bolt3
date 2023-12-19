import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateWithoutWorkingListInput } from "../inputs/ClinicalEventCreateWithoutWorkingListInput";
import { ClinicalEventUpdateWithoutWorkingListInput } from "../inputs/ClinicalEventUpdateWithoutWorkingListInput";
import { ClinicalEventWhereInput } from "../inputs/ClinicalEventWhereInput";

@TypeGraphQL.InputType("ClinicalEventUpsertWithoutWorkingListInput", {})
export class ClinicalEventUpsertWithoutWorkingListInput {
  @TypeGraphQL.Field(_type => ClinicalEventUpdateWithoutWorkingListInput, {
    nullable: false
  })
  update!: ClinicalEventUpdateWithoutWorkingListInput;

  @TypeGraphQL.Field(_type => ClinicalEventCreateWithoutWorkingListInput, {
    nullable: false
  })
  create!: ClinicalEventCreateWithoutWorkingListInput;

  @TypeGraphQL.Field(_type => ClinicalEventWhereInput, {
    nullable: true
  })
  where?: ClinicalEventWhereInput | undefined;
}
