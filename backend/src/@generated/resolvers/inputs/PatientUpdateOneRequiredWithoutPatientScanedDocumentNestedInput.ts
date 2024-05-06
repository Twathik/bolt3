import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateOrConnectWithoutPatientScanedDocumentInput } from "../inputs/PatientCreateOrConnectWithoutPatientScanedDocumentInput";
import { PatientCreateWithoutPatientScanedDocumentInput } from "../inputs/PatientCreateWithoutPatientScanedDocumentInput";
import { PatientUpdateToOneWithWhereWithoutPatientScanedDocumentInput } from "../inputs/PatientUpdateToOneWithWhereWithoutPatientScanedDocumentInput";
import { PatientUpsertWithoutPatientScanedDocumentInput } from "../inputs/PatientUpsertWithoutPatientScanedDocumentInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientUpdateOneRequiredWithoutPatientScanedDocumentNestedInput", {})
export class PatientUpdateOneRequiredWithoutPatientScanedDocumentNestedInput {
  @TypeGraphQL.Field(_type => PatientCreateWithoutPatientScanedDocumentInput, {
    nullable: true
  })
  create?: PatientCreateWithoutPatientScanedDocumentInput | undefined;

  @TypeGraphQL.Field(_type => PatientCreateOrConnectWithoutPatientScanedDocumentInput, {
    nullable: true
  })
  connectOrCreate?: PatientCreateOrConnectWithoutPatientScanedDocumentInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpsertWithoutPatientScanedDocumentInput, {
    nullable: true
  })
  upsert?: PatientUpsertWithoutPatientScanedDocumentInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateToOneWithWhereWithoutPatientScanedDocumentInput, {
    nullable: true
  })
  update?: PatientUpdateToOneWithWhereWithoutPatientScanedDocumentInput | undefined;
}
