import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateNestedOneWithoutPatientScanedDocumentInput } from "../inputs/PatientCreateNestedOneWithoutPatientScanedDocumentInput";
import { PatientScannedDocumentCreatedocumentCollectionUrlsInput } from "../inputs/PatientScannedDocumentCreatedocumentCollectionUrlsInput";

@TypeGraphQL.InputType("PatientScannedDocumentCreateInput", {})
export class PatientScannedDocumentCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  documentCollectionName!: string;

  @TypeGraphQL.Field(_type => PatientScannedDocumentCreatedocumentCollectionUrlsInput, {
    nullable: true
  })
  documentCollectionUrls?: PatientScannedDocumentCreatedocumentCollectionUrlsInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  documentCollectionDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PatientCreateNestedOneWithoutPatientScanedDocumentInput, {
    nullable: false
  })
  patient!: PatientCreateNestedOneWithoutPatientScanedDocumentInput;
}
