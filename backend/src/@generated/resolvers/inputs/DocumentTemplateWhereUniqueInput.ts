import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DocumentTemplateWhereInput } from "../inputs/DocumentTemplateWhereInput";
import { EnumTemplateSpecialityFilter } from "../inputs/EnumTemplateSpecialityFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("DocumentTemplateWhereUniqueInput", {})
export class DocumentTemplateWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [DocumentTemplateWhereInput], {
    nullable: true
  })
  AND?: DocumentTemplateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentTemplateWhereInput], {
    nullable: true
  })
  OR?: DocumentTemplateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentTemplateWhereInput], {
    nullable: true
  })
  NOT?: DocumentTemplateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  templateName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  evenTemplateUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  eventDoxTemplate?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  oddTemplateUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  oddDoxTemplate?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTemplateSpecialityFilter, {
    nullable: true
  })
  templateSpeciality?: EnumTemplateSpecialityFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
