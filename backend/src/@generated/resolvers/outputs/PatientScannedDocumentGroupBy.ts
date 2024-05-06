import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientScannedDocumentCountAggregate } from "../outputs/PatientScannedDocumentCountAggregate";
import { PatientScannedDocumentMaxAggregate } from "../outputs/PatientScannedDocumentMaxAggregate";
import { PatientScannedDocumentMinAggregate } from "../outputs/PatientScannedDocumentMinAggregate";

@TypeGraphQL.ObjectType("PatientScannedDocumentGroupBy", {})
export class PatientScannedDocumentGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  documentCollectionName!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  documentCollectionUrls!: string[] | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  documentCollectionDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patientId!: string;

  @TypeGraphQL.Field(_type => PatientScannedDocumentCountAggregate, {
    nullable: true
  })
  _count!: PatientScannedDocumentCountAggregate | null;

  @TypeGraphQL.Field(_type => PatientScannedDocumentMinAggregate, {
    nullable: true
  })
  _min!: PatientScannedDocumentMinAggregate | null;

  @TypeGraphQL.Field(_type => PatientScannedDocumentMaxAggregate, {
    nullable: true
  })
  _max!: PatientScannedDocumentMaxAggregate | null;
}
