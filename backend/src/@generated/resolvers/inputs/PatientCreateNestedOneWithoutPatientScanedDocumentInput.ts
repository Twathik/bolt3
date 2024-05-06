import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateOrConnectWithoutPatientScanedDocumentInput } from "../inputs/PatientCreateOrConnectWithoutPatientScanedDocumentInput";
import { PatientCreateWithoutPatientScanedDocumentInput } from "../inputs/PatientCreateWithoutPatientScanedDocumentInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientCreateNestedOneWithoutPatientScanedDocumentInput", {})
export class PatientCreateNestedOneWithoutPatientScanedDocumentInput {
  @TypeGraphQL.Field(_type => PatientCreateWithoutPatientScanedDocumentInput, {
    nullable: true
  })
  create?: PatientCreateWithoutPatientScanedDocumentInput | undefined;

  @TypeGraphQL.Field(_type => PatientCreateOrConnectWithoutPatientScanedDocumentInput, {
    nullable: true
  })
  connectOrCreate?: PatientCreateOrConnectWithoutPatientScanedDocumentInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientWhereUniqueInput | undefined;
}
