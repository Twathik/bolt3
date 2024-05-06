import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientScannedDocumentCreateWithoutPatientInput } from "../inputs/PatientScannedDocumentCreateWithoutPatientInput";
import { PatientScannedDocumentUpdateWithoutPatientInput } from "../inputs/PatientScannedDocumentUpdateWithoutPatientInput";
import { PatientScannedDocumentWhereUniqueInput } from "../inputs/PatientScannedDocumentWhereUniqueInput";

@TypeGraphQL.InputType("PatientScannedDocumentUpsertWithWhereUniqueWithoutPatientInput", {})
export class PatientScannedDocumentUpsertWithWhereUniqueWithoutPatientInput {
  @TypeGraphQL.Field(_type => PatientScannedDocumentWhereUniqueInput, {
    nullable: false
  })
  where!: PatientScannedDocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientScannedDocumentUpdateWithoutPatientInput, {
    nullable: false
  })
  update!: PatientScannedDocumentUpdateWithoutPatientInput;

  @TypeGraphQL.Field(_type => PatientScannedDocumentCreateWithoutPatientInput, {
    nullable: false
  })
  create!: PatientScannedDocumentCreateWithoutPatientInput;
}
