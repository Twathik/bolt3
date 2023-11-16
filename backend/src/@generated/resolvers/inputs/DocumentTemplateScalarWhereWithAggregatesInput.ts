import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { EnumEventTypesWithAggregatesFilter } from "../inputs/EnumEventTypesWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("DocumentTemplateScalarWhereWithAggregatesInput", {})
export class DocumentTemplateScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DocumentTemplateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DocumentTemplateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentTemplateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DocumentTemplateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentTemplateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DocumentTemplateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEventTypesWithAggregatesFilter, {
    nullable: true
  })
  eventType?: EnumEventTypesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  template?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  empty?: BoolWithAggregatesFilter | undefined;
}
