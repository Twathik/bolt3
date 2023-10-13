import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListCountAggregate } from "../outputs/ConsultationListCountAggregate";
import { ConsultationListMaxAggregate } from "../outputs/ConsultationListMaxAggregate";
import { ConsultationListMinAggregate } from "../outputs/ConsultationListMinAggregate";

@TypeGraphQL.ObjectType("AggregateConsultationList", {})
export class AggregateConsultationList {
  @TypeGraphQL.Field(_type => ConsultationListCountAggregate, {
    nullable: true
  })
  _count!: ConsultationListCountAggregate | null;

  @TypeGraphQL.Field(_type => ConsultationListMinAggregate, {
    nullable: true
  })
  _min!: ConsultationListMinAggregate | null;

  @TypeGraphQL.Field(_type => ConsultationListMaxAggregate, {
    nullable: true
  })
  _max!: ConsultationListMaxAggregate | null;
}
