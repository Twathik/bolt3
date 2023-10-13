import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListListRelationFilter } from "../inputs/ConsultationListListRelationFilter";
import { ConsultationWhereInput } from "../inputs/ConsultationWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ConsultationWhereUniqueInput", {})
export class ConsultationWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [ConsultationWhereInput], {
    nullable: true
  })
  AND?: ConsultationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationWhereInput], {
    nullable: true
  })
  OR?: ConsultationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationWhereInput], {
    nullable: true
  })
  NOT?: ConsultationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  day?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  month?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  year?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ConsultationListListRelationFilter, {
    nullable: true
  })
  ConsultationList?: ConsultationListListRelationFilter | undefined;
}
