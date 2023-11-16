import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { EnumEventTypesFilter } from "../inputs/EnumEventTypesFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("DocumentTemplateWhereInput", {})
export class DocumentTemplateWhereInput {
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
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEventTypesFilter, {
    nullable: true
  })
  eventType?: EnumEventTypesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  template?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  empty?: BoolFilter | undefined;
}
