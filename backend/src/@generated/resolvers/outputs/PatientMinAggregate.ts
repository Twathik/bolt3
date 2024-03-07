import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sexe } from "../../enums/Sexe";

@TypeGraphQL.ObjectType("PatientMinAggregate", {})
export class PatientMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ddn!: Date | null;

  @TypeGraphQL.Field(_type => Sexe, {
    nullable: true
  })
  sexe!: "M" | "F" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nTel!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  height!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  weight!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated!: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  deleted!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  onTrash!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  informationsConfirmed!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  clinicalData!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  documentData!: string | null;
}
