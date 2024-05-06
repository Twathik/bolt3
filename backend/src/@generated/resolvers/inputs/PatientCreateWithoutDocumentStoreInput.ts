import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateNestedManyWithoutPatientInput } from "../inputs/ClinicalEventCreateNestedManyWithoutPatientInput";
import { ConsultationListCreateNestedManyWithoutPatientInput } from "../inputs/ConsultationListCreateNestedManyWithoutPatientInput";
import { PatientScannedDocumentCreateNestedManyWithoutPatientInput } from "../inputs/PatientScannedDocumentCreateNestedManyWithoutPatientInput";
import { WorkingListCreateNestedManyWithoutPatientInput } from "../inputs/WorkingListCreateNestedManyWithoutPatientInput";
import { Sexe } from "../../enums/Sexe";

@TypeGraphQL.InputType("PatientCreateWithoutDocumentStoreInput", {})
export class PatientCreateWithoutDocumentStoreInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  ddn!: Date;

  @TypeGraphQL.Field(_type => Sexe, {
    nullable: false
  })
  sexe!: "M" | "F";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nTel?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  height?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  weight?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  deleted?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  onTrash?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  informationsConfirmed?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patientAvatar?: string | undefined;

  @TypeGraphQL.Field(_type => ConsultationListCreateNestedManyWithoutPatientInput, {
    nullable: true
  })
  ConsultationList?: ConsultationListCreateNestedManyWithoutPatientInput | undefined;

  @TypeGraphQL.Field(_type => ClinicalEventCreateNestedManyWithoutPatientInput, {
    nullable: true
  })
  ClinicalEvent?: ClinicalEventCreateNestedManyWithoutPatientInput | undefined;

  @TypeGraphQL.Field(_type => WorkingListCreateNestedManyWithoutPatientInput, {
    nullable: true
  })
  WorkingList?: WorkingListCreateNestedManyWithoutPatientInput | undefined;

  @TypeGraphQL.Field(_type => PatientScannedDocumentCreateNestedManyWithoutPatientInput, {
    nullable: true
  })
  PatientScanedDocument?: PatientScannedDocumentCreateNestedManyWithoutPatientInput | undefined;
}
