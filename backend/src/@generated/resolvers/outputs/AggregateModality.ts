import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModalityAvgAggregate } from "../outputs/ModalityAvgAggregate";
import { ModalityCountAggregate } from "../outputs/ModalityCountAggregate";
import { ModalityMaxAggregate } from "../outputs/ModalityMaxAggregate";
import { ModalityMinAggregate } from "../outputs/ModalityMinAggregate";
import { ModalitySumAggregate } from "../outputs/ModalitySumAggregate";

@TypeGraphQL.ObjectType("AggregateModality", {})
export class AggregateModality {
  @TypeGraphQL.Field(_type => ModalityCountAggregate, {
    nullable: true
  })
  _count!: ModalityCountAggregate | null;

  @TypeGraphQL.Field(_type => ModalityAvgAggregate, {
    nullable: true
  })
  _avg!: ModalityAvgAggregate | null;

  @TypeGraphQL.Field(_type => ModalitySumAggregate, {
    nullable: true
  })
  _sum!: ModalitySumAggregate | null;

  @TypeGraphQL.Field(_type => ModalityMinAggregate, {
    nullable: true
  })
  _min!: ModalityMinAggregate | null;

  @TypeGraphQL.Field(_type => ModalityMaxAggregate, {
    nullable: true
  })
  _max!: ModalityMaxAggregate | null;
}
