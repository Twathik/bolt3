import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ClinicalEvent } from "../models/ClinicalEvent";
import { Modality } from "../models/Modality";
import { Patient } from "../models/Patient";
import { User } from "../models/User";
import { ModalityExamStatus } from "../enums/ModalityExamStatus";

@TypeGraphQL.ObjectType("WorkingList", {})
export class WorkingList {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  patient?: Patient;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patientId!: string;

  modality?: Modality;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  modalityId!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  clinicalEvent?: ClinicalEvent;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  clinicalEventId!: string;

  @TypeGraphQL.Field(_type => ModalityExamStatus, {
    nullable: false
  })
  modalityExamStatus!: "CREATED" | "INPROGRESS" | "REALIZED" | "REPORT_DONE" | "CLOSED";

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
  linked!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  linkId?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  locked!: boolean;
}
