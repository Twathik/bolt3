import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListCountAggregate } from "../outputs/ConsultationListCountAggregate";
import { ConsultationListMaxAggregate } from "../outputs/ConsultationListMaxAggregate";
import { ConsultationListMinAggregate } from "../outputs/ConsultationListMinAggregate";

@TypeGraphQL.ObjectType("ConsultationListGroupBy", {})
export class ConsultationListGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patientId!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  consultationDate!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
