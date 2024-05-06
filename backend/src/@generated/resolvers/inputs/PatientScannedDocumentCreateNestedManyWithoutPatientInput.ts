import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientScannedDocumentCreateManyPatientInputEnvelope } from "../inputs/PatientScannedDocumentCreateManyPatientInputEnvelope";
import { PatientScannedDocumentCreateOrConnectWithoutPatientInput } from "../inputs/PatientScannedDocumentCreateOrConnectWithoutPatientInput";
import { PatientScannedDocumentCreateWithoutPatientInput } from "../inputs/PatientScannedDocumentCreateWithoutPatientInput";
import { PatientScannedDocumentWhereUniqueInput } from "../inputs/PatientScannedDocumentWhereUniqueInput";

@TypeGraphQL.InputType("PatientScannedDocumentCreateNestedManyWithoutPatientInput", {})
export class PatientScannedDocumentCreateNestedManyWithoutPatientInput {
  @TypeGraphQL.Field(_type => [PatientScannedDocumentCreateWithoutPatientInput], {
    nullable: true
  })
  create?: PatientScannedDocumentCreateWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentCreateOrConnectWithoutPatientInput], {
    nullable: true
  })
  connectOrCreate?: PatientScannedDocumentCreateOrConnectWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => PatientScannedDocumentCreateManyPatientInputEnvelope, {
    nullable: true
  })
  createMany?: PatientScannedDocumentCreateManyPatientInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PatientScannedDocumentWhereUniqueInput], {
    nullable: true
  })
  connect?: PatientScannedDocumentWhereUniqueInput[] | undefined;
}
