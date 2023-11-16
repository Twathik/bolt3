import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ClinicalEvent } from "../models/ClinicalEvent";

@TypeGraphQL.ObjectType("Prescription", {})
export class Prescription {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  clinicalEvent?: ClinicalEvent;

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
}
