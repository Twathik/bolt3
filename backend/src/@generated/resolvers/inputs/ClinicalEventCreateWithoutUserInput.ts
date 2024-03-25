import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateNestedOneWithoutClinicalEventInput } from "../inputs/PatientCreateNestedOneWithoutClinicalEventInput";
import { PrescriptionCreateNestedOneWithoutClinicalEventInput } from "../inputs/PrescriptionCreateNestedOneWithoutClinicalEventInput";
import { WorkingListCreateNestedManyWithoutClinicalEventInput } from "../inputs/WorkingListCreateNestedManyWithoutClinicalEventInput";
import { EventCategory } from "../../enums/EventCategory";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.InputType("ClinicalEventCreateWithoutUserInput", {})
export class ClinicalEventCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: false
  })
  eventType!: "DIAGNOSTIC" | "HISTORY" | "CLINICALEXAM" | "ECG" | "SONOGRAPHY" | "BIOLOGY" | "PRESCRIPTION" | "MEDICAL_REPORT" | "CERTIFICAT";

  @TypeGraphQL.Field(_type => EventCategory, {
    nullable: true
  })
  eventCategory?: "FOLDER" | "DOCUMENT" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  deleted?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deletedReport?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deletedByUserId?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  dicom?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dicomId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  clinicalDiagnosticId?: string | undefined;

  @TypeGraphQL.Field(_type => PatientCreateNestedOneWithoutClinicalEventInput, {
    nullable: false
  })
  patient!: PatientCreateNestedOneWithoutClinicalEventInput;

  @TypeGraphQL.Field(_type => PrescriptionCreateNestedOneWithoutClinicalEventInput, {
    nullable: true
  })
  Prescription?: PrescriptionCreateNestedOneWithoutClinicalEventInput | undefined;

  @TypeGraphQL.Field(_type => WorkingListCreateNestedManyWithoutClinicalEventInput, {
    nullable: true
  })
  WorkingList?: WorkingListCreateNestedManyWithoutClinicalEventInput | undefined;
}
