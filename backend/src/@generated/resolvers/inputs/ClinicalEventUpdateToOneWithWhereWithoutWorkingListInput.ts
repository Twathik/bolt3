import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventUpdateWithoutWorkingListInput } from "../inputs/ClinicalEventUpdateWithoutWorkingListInput";
import { ClinicalEventWhereInput } from "../inputs/ClinicalEventWhereInput";

@TypeGraphQL.InputType("ClinicalEventUpdateToOneWithWhereWithoutWorkingListInput", {})
export class ClinicalEventUpdateToOneWithWhereWithoutWorkingListInput {
  @TypeGraphQL.Field(_type => ClinicalEventWhereInput, {
    nullable: true
  })
  where?: ClinicalEventWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventUpdateWithoutWorkingListInput, {
    nullable: false
  })
  data!: ClinicalEventUpdateWithoutWorkingListInput;
}
