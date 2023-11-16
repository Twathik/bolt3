import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventWhereInput } from "../inputs/ClinicalEventWhereInput";

@TypeGraphQL.InputType("ClinicalEventRelationFilter", {})
export class ClinicalEventRelationFilter {
  @TypeGraphQL.Field(_type => ClinicalEventWhereInput, {
    nullable: true
  })
  is?: ClinicalEventWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventWhereInput, {
    nullable: true
  })
  isNot?: ClinicalEventWhereInput | undefined;
}
