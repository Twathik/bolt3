import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionCountAggregate } from "../outputs/PrescriptionCountAggregate";
import { PrescriptionMaxAggregate } from "../outputs/PrescriptionMaxAggregate";
import { PrescriptionMinAggregate } from "../outputs/PrescriptionMinAggregate";

@TypeGraphQL.ObjectType("AggregatePrescription", {})
export class AggregatePrescription {
  @TypeGraphQL.Field(_type => PrescriptionCountAggregate, {
    nullable: true
  })
  _count!: PrescriptionCountAggregate | null;

  @TypeGraphQL.Field(_type => PrescriptionMinAggregate, {
    nullable: true
  })
  _min!: PrescriptionMinAggregate | null;

  @TypeGraphQL.Field(_type => PrescriptionMaxAggregate, {
    nullable: true
  })
  _max!: PrescriptionMaxAggregate | null;
}
