import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DocumentTemplateWhereInput } from "../inputs/DocumentTemplateWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.InputType("DocumentTemplateWhereUniqueInput", {})
export class DocumentTemplateWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: true
  })
  eventType?: "DIAGNOSTIC" | "PRESCRIPTION" | "GENERAL_SONO" | undefined;

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
  template?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  empty?: BoolFilter | undefined;
}
