import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientScannedDocumentCreateWithoutPatientInput } from "../inputs/PatientScannedDocumentCreateWithoutPatientInput";
import { PatientScannedDocumentWhereUniqueInput } from "../inputs/PatientScannedDocumentWhereUniqueInput";

@TypeGraphQL.InputType("PatientScannedDocumentCreateOrConnectWithoutPatientInput", {})
export class PatientScannedDocumentCreateOrConnectWithoutPatientInput {
  @TypeGraphQL.Field(_type => PatientScannedDocumentWhereUniqueInput, {
    nullable: false
  })
  where!: PatientScannedDocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientScannedDocumentCreateWithoutPatientInput, {
    nullable: false
  })
  create!: PatientScannedDocumentCreateWithoutPatientInput;
}
