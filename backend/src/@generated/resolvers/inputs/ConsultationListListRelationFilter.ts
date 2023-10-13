import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListWhereInput } from "../inputs/ConsultationListWhereInput";

@TypeGraphQL.InputType("ConsultationListListRelationFilter", {})
export class ConsultationListListRelationFilter {
  @TypeGraphQL.Field(_type => ConsultationListWhereInput, {
    nullable: true
  })
  every?: ConsultationListWhereInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationListWhereInput, {
    nullable: true
  })
  some?: ConsultationListWhereInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationListWhereInput, {
    nullable: true
  })
  none?: ConsultationListWhereInput | undefined;
}
