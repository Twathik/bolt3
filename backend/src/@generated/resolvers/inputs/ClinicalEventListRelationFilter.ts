import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventWhereInput } from "../inputs/ClinicalEventWhereInput";

@TypeGraphQL.InputType("ClinicalEventListRelationFilter", {})
export class ClinicalEventListRelationFilter {
  @TypeGraphQL.Field(_type => ClinicalEventWhereInput, {
    nullable: true
  })
  every?: ClinicalEventWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventWhereInput, {
    nullable: true
  })
  some?: ClinicalEventWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventWhereInput, {
    nullable: true
  })
  none?: ClinicalEventWhereInput | undefined;
}
