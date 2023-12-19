import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateNestedOneWithoutClinicalEventInput } from "../inputs/PatientCreateNestedOneWithoutClinicalEventInput";
import { UserCreateNestedOneWithoutClinicalEventInput } from "../inputs/UserCreateNestedOneWithoutClinicalEventInput";
import { WorkingListCreateNestedManyWithoutClinicalEventInput } from "../inputs/WorkingListCreateNestedManyWithoutClinicalEventInput";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.InputType("ClinicalEventCreateWithoutPrescriptionInput", {})
export class ClinicalEventCreateWithoutPrescriptionInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: false
  })
  eventType!: "DIAGNOSTIC" | "PRESCRIPTION" | "GENERAL_SONO";

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
  onTrash?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  deleted?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  empty?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  createdReport?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  report?: string | undefined;

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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutClinicalEventInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutClinicalEventInput;

  @TypeGraphQL.Field(_type => PatientCreateNestedOneWithoutClinicalEventInput, {
    nullable: false
  })
  patient!: PatientCreateNestedOneWithoutClinicalEventInput;

  @TypeGraphQL.Field(_type => WorkingListCreateNestedManyWithoutClinicalEventInput, {
    nullable: true
  })
  WorkingList?: WorkingListCreateNestedManyWithoutClinicalEventInput | undefined;
}
