import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCountAggregate } from "../outputs/ClinicalEventCountAggregate";
import { ClinicalEventMaxAggregate } from "../outputs/ClinicalEventMaxAggregate";
import { ClinicalEventMinAggregate } from "../outputs/ClinicalEventMinAggregate";

@TypeGraphQL.ObjectType("AggregateClinicalEvent", {})
export class AggregateClinicalEvent {
  @TypeGraphQL.Field(_type => ClinicalEventCountAggregate, {
    nullable: true
  })
  _count!: ClinicalEventCountAggregate | null;

  @TypeGraphQL.Field(_type => ClinicalEventMinAggregate, {
    nullable: true
  })
  _min!: ClinicalEventMinAggregate | null;

  @TypeGraphQL.Field(_type => ClinicalEventMaxAggregate, {
    nullable: true
  })
  _max!: ClinicalEventMaxAggregate | null;
}
