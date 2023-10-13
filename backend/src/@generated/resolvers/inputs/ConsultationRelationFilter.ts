import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationWhereInput } from "../inputs/ConsultationWhereInput";

@TypeGraphQL.InputType("ConsultationRelationFilter", {})
export class ConsultationRelationFilter {
  @TypeGraphQL.Field(_type => ConsultationWhereInput, {
    nullable: true
  })
  is?: ConsultationWhereInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationWhereInput, {
    nullable: true
  })
  isNot?: ConsultationWhereInput | undefined;
}
