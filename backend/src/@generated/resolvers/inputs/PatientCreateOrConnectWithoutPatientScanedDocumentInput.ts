import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateWithoutPatientScanedDocumentInput } from "../inputs/PatientCreateWithoutPatientScanedDocumentInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientCreateOrConnectWithoutPatientScanedDocumentInput", {})
export class PatientCreateOrConnectWithoutPatientScanedDocumentInput {
  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: false
  })
  where!: PatientWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientCreateWithoutPatientScanedDocumentInput, {
    nullable: false
  })
  create!: PatientCreateWithoutPatientScanedDocumentInput;
}
