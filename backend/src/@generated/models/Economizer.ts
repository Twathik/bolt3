import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EventTypes } from "../enums/EventTypes";

@TypeGraphQL.ObjectType("Economizer", {})
export class Economizer {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: false
  })
  eventType!: "CLINICAL_VISIT" | "PRESCRIPTION" | "GENERAL_SONO";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  template!: string;
}
