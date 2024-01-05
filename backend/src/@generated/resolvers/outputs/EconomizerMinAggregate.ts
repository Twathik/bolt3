import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.ObjectType("EconomizerMinAggregate", {})
export class EconomizerMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: true
  })
  eventType!: "CLINICAL_VISIT" | "PRESCRIPTION" | "GENERAL_SONO" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  template!: string | null;
}
