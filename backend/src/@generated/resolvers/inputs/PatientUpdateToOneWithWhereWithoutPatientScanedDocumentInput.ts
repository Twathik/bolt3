import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientUpdateWithoutPatientScanedDocumentInput } from "../inputs/PatientUpdateWithoutPatientScanedDocumentInput";
import { PatientWhereInput } from "../inputs/PatientWhereInput";

@TypeGraphQL.InputType("PatientUpdateToOneWithWhereWithoutPatientScanedDocumentInput", {})
export class PatientUpdateToOneWithWhereWithoutPatientScanedDocumentInput {
  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateWithoutPatientScanedDocumentInput, {
    nullable: false
  })
  data!: PatientUpdateWithoutPatientScanedDocumentInput;
}
