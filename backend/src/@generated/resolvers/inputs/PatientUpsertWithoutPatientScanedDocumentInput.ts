import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateWithoutPatientScanedDocumentInput } from "../inputs/PatientCreateWithoutPatientScanedDocumentInput";
import { PatientUpdateWithoutPatientScanedDocumentInput } from "../inputs/PatientUpdateWithoutPatientScanedDocumentInput";
import { PatientWhereInput } from "../inputs/PatientWhereInput";

@TypeGraphQL.InputType("PatientUpsertWithoutPatientScanedDocumentInput", {})
export class PatientUpsertWithoutPatientScanedDocumentInput {
  @TypeGraphQL.Field(_type => PatientUpdateWithoutPatientScanedDocumentInput, {
    nullable: false
  })
  update!: PatientUpdateWithoutPatientScanedDocumentInput;

  @TypeGraphQL.Field(_type => PatientCreateWithoutPatientScanedDocumentInput, {
    nullable: false
  })
  create!: PatientCreateWithoutPatientScanedDocumentInput;

  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;
}
