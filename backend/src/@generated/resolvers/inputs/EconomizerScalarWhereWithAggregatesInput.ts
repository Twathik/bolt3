import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumEventTypesWithAggregatesFilter } from "../inputs/EnumEventTypesWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EconomizerScalarWhereWithAggregatesInput", {})
export class EconomizerScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EconomizerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EconomizerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EconomizerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EconomizerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EconomizerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EconomizerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEventTypesWithAggregatesFilter, {
    nullable: true
  })
  eventType?: EnumEventTypesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  template?: StringWithAggregatesFilter | undefined;
}
