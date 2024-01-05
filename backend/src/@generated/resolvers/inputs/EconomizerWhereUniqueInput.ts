import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EconomizerWhereInput } from "../inputs/EconomizerWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.InputType("EconomizerWhereUniqueInput", {})
export class EconomizerWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: true
  })
  eventType?: "CLINICAL_VISIT" | "PRESCRIPTION" | "GENERAL_SONO" | undefined;

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
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  template?: StringFilter | undefined;
}
