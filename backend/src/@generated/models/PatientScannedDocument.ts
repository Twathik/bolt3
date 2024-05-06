import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Patient } from "../models/Patient";

@TypeGraphQL.ObjectType("PatientScannedDocument", {})
export class PatientScannedDocument {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  documentCollectionName!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  documentCollectionUrls!: string[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  documentCollectionDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  patient?: Patient;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patientId!: string;
}
