import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientScannedDocumentCreatedocumentCollectionUrlsInput } from "../inputs/PatientScannedDocumentCreatedocumentCollectionUrlsInput";

@TypeGraphQL.InputType("PatientScannedDocumentCreateWithoutPatientInput", {})
export class PatientScannedDocumentCreateWithoutPatientInput {
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
}
