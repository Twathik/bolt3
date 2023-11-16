import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionCountAggregate } from "../outputs/PrescriptionCountAggregate";
import { PrescriptionMaxAggregate } from "../outputs/PrescriptionMaxAggregate";
import { PrescriptionMinAggregate } from "../outputs/PrescriptionMinAggregate";

@TypeGraphQL.ObjectType("PrescriptionGroupBy", {})
export class PrescriptionGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  clinicalEventId!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  savedPrescription!: Prisma.JsonValue;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
