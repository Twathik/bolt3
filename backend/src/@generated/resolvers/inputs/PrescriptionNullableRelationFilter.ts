import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionWhereInput } from "../inputs/PrescriptionWhereInput";

@TypeGraphQL.InputType("PrescriptionNullableRelationFilter", {})
export class PrescriptionNullableRelationFilter {
  @TypeGraphQL.Field(_type => PrescriptionWhereInput, {
    nullable: true
  })
  is?: PrescriptionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionWhereInput, {
    nullable: true
  })
  isNot?: PrescriptionWhereInput | undefined;
}
