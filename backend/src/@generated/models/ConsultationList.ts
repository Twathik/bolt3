import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Consultation } from "../models/Consultation";
import { Patient } from "../models/Patient";

@TypeGraphQL.ObjectType("ConsultationList", {})
export class ConsultationList {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  patient?: Patient;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patientId!: string;

  consultation?: Consultation;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  consultationId!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;
}
