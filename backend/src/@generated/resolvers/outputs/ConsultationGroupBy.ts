import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationAvgAggregate } from "../outputs/ConsultationAvgAggregate";
import { ConsultationCountAggregate } from "../outputs/ConsultationCountAggregate";
import { ConsultationMaxAggregate } from "../outputs/ConsultationMaxAggregate";
import { ConsultationMinAggregate } from "../outputs/ConsultationMinAggregate";
import { ConsultationSumAggregate } from "../outputs/ConsultationSumAggregate";

@TypeGraphQL.ObjectType("ConsultationGroupBy", {})
export class ConsultationGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  day!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  month!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  year!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => ConsultationCountAggregate, {
    nullable: true
  })
  _count!: ConsultationCountAggregate | null;

  @TypeGraphQL.Field(_type => ConsultationAvgAggregate, {
    nullable: true
  })
  _avg!: ConsultationAvgAggregate | null;

  @TypeGraphQL.Field(_type => ConsultationSumAggregate, {
    nullable: true
  })
  _sum!: ConsultationSumAggregate | null;

  @TypeGraphQL.Field(_type => ConsultationMinAggregate, {
    nullable: true
  })
  _min!: ConsultationMinAggregate | null;

  @TypeGraphQL.Field(_type => ConsultationMaxAggregate, {
    nullable: true
  })
  _max!: ConsultationMaxAggregate | null;
}
