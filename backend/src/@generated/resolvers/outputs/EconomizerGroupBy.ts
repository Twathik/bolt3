import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EconomizerCountAggregate } from "../outputs/EconomizerCountAggregate";
import { EconomizerMaxAggregate } from "../outputs/EconomizerMaxAggregate";
import { EconomizerMinAggregate } from "../outputs/EconomizerMinAggregate";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.ObjectType("EconomizerGroupBy", {})
export class EconomizerGroupBy {
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
  eventType!: "DIAGNOSTIC" | "PRESCRIPTION" | "GENERAL_SONO";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  template!: string;

  @TypeGraphQL.Field(_type => EconomizerCountAggregate, {
    nullable: true
  })
  _count!: EconomizerCountAggregate | null;

  @TypeGraphQL.Field(_type => EconomizerMinAggregate, {
    nullable: true
  })
  _min!: EconomizerMinAggregate | null;

  @TypeGraphQL.Field(_type => EconomizerMaxAggregate, {
    nullable: true
  })
  _max!: EconomizerMaxAggregate | null;
}
