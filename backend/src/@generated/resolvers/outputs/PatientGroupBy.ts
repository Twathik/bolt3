import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCountAggregate } from "../outputs/PatientCountAggregate";
import { PatientMaxAggregate } from "../outputs/PatientMaxAggregate";
import { PatientMinAggregate } from "../outputs/PatientMinAggregate";
import { Sexe } from "../../enums/Sexe";

@TypeGraphQL.ObjectType("PatientGroupBy", {})
export class PatientGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  ddn!: Date;

  @TypeGraphQL.Field(_type => Sexe, {
    nullable: false
  })
  sexe!: "M" | "F";

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  nTel!: string[] | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  deleted!: boolean;

  @TypeGraphQL.Field(_type => PatientCountAggregate, {
    nullable: true
  })
  _count!: PatientCountAggregate | null;

  @TypeGraphQL.Field(_type => PatientMinAggregate, {
    nullable: true
  })
  _min!: PatientMinAggregate | null;

  @TypeGraphQL.Field(_type => PatientMaxAggregate, {
    nullable: true
  })
  _max!: PatientMaxAggregate | null;
}
