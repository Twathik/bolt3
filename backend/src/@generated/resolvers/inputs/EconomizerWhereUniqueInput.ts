import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EconomizerWhereInput } from "../inputs/EconomizerWhereInput";
import { EnumEventTypesFilter } from "../inputs/EnumEventTypesFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EconomizerWhereUniqueInput", {})
export class EconomizerWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

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

  @TypeGraphQL.Field(_type => EnumEventTypesFilter, {
    nullable: true
  })
  eventType?: EnumEventTypesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  template?: StringFilter | undefined;
}
