import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumEventTypesFilter } from "../inputs/EnumEventTypesFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EconomizerWhereInput", {})
export class EconomizerWhereInput {
  @TypeGraphQL.Field(_type => [EconomizerWhereInput], {
    nullable: true
  })
  AND?: EconomizerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EconomizerWhereInput], {
    nullable: true
  })
  OR?: EconomizerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EconomizerWhereInput], {
    nullable: true
  })
  NOT?: EconomizerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumEventTypesFilter, {
    nullable: true
  })
  eventType?: EnumEventTypesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  template?: StringFilter | undefined;
}
