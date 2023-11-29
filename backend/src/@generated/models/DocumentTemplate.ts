import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EventTypes } from "../enums/EventTypes";

@TypeGraphQL.ObjectType("DocumentTemplate", {})
export class DocumentTemplate {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: false
  })
  eventType!: "DIAGNOSTIC" | "PRESCRIPTION" | "GENERAL_SONO";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  template!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  empty!: boolean;
}
