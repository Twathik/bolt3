import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ClinicalEvent } from "../models/ClinicalEvent";
import { ConsultationList } from "../models/ConsultationList";
import { DocumentStore } from "../models/DocumentStore";
import { PatientScannedDocument } from "../models/PatientScannedDocument";
import { WorkingList } from "../models/WorkingList";
import { Sexe } from "../enums/Sexe";
import { PatientCount } from "../resolvers/outputs/PatientCount";

@TypeGraphQL.ObjectType("Patient", {})
export class Patient {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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
  nTel?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  height?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  weight?: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  deleted!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  onTrash!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  informationsConfirmed!: boolean;

  ConsultationList?: ConsultationList[];

  ClinicalEvent?: ClinicalEvent[];

  WorkingList?: WorkingList[];

  DocumentStore?: DocumentStore[];

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patientAvatar?: string | null;

  PatientScanedDocument?: PatientScannedDocument[];

  @TypeGraphQL.Field(_type => PatientCount, {
    nullable: true
  })
  _count?: PatientCount | null;
}
