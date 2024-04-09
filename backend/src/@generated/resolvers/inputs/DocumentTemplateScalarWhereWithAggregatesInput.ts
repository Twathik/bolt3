import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumTemplateSpecialityWithAggregatesFilter } from "../inputs/EnumTemplateSpecialityWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
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

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  templateName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  evenTemplateUrl?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  eventDoxTemplate?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  oddTemplateUrl?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  oddDoxTemplate?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTemplateSpecialityWithAggregatesFilter, {
    nullable: true
  })
  templateSpeciality?: EnumTemplateSpecialityWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
