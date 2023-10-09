import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Sexe } from "../enums/Sexe";

@TypeGraphQL.ObjectType("Patient", {})
export class Patient {
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
    nullable: false
  })
  nTel!: string[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  deleted!: boolean;
}
