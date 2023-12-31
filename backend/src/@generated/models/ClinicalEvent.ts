import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Patient } from "../models/Patient";
import { Prescription } from "../models/Prescription";
import { User } from "../models/User";
import { WorkingList } from "../models/WorkingList";
import { EventTypes } from "../enums/EventTypes";
import { ClinicalEventCount } from "../resolvers/outputs/ClinicalEventCount";

@TypeGraphQL.ObjectType("ClinicalEvent", {})
export class ClinicalEvent {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: false
  })
  eventType!: "CLINICAL_VISIT" | "PRESCRIPTION" | "GENERAL_SONO";

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  patient?: Patient;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patientId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  onTrash!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  deleted!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  empty!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  createdReport!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  report?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  dicom!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dicomId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  clinicalDiagnosticId?: string | null;

  Prescription?: Prescription | null;

  WorkingList?: WorkingList[];

  @TypeGraphQL.Field(_type => ClinicalEventCount, {
    nullable: true
  })
  _count?: ClinicalEventCount | null;
}
