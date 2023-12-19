import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCountAggregate } from "../outputs/WorkingListCountAggregate";
import { WorkingListMaxAggregate } from "../outputs/WorkingListMaxAggregate";
import { WorkingListMinAggregate } from "../outputs/WorkingListMinAggregate";

@TypeGraphQL.ObjectType("AggregateWorkingList", {})
export class AggregateWorkingList {
  @TypeGraphQL.Field(_type => WorkingListCountAggregate, {
    nullable: true
  })
  _count!: WorkingListCountAggregate | null;

  @TypeGraphQL.Field(_type => WorkingListMinAggregate, {
    nullable: true
  })
  _min!: WorkingListMinAggregate | null;

  @TypeGraphQL.Field(_type => WorkingListMaxAggregate, {
    nullable: true
  })
  _max!: WorkingListMaxAggregate | null;
}
