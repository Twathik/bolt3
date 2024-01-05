import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCountAggregate } from "../outputs/ClinicalEventCountAggregate";
import { ClinicalEventMaxAggregate } from "../outputs/ClinicalEventMaxAggregate";
import { ClinicalEventMinAggregate } from "../outputs/ClinicalEventMinAggregate";
import { EventTypes } from "../../enums/EventTypes";

@TypeGraphQL.ObjectType("ClinicalEventGroupBy", {})
export class ClinicalEventGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => EventTypes, {
    nullable: false
  })
  eventType!: "CLINICAL_VISIT" | "PRESCRIPTION" | "GENERAL_SONO";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

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
  report!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  dicom!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dicomId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  clinicalDiagnosticId!: string | null;

  @TypeGraphQL.Field(_type => ClinicalEventCountAggregate, {
    nullable: true
  })
  _count!: ClinicalEventCountAggregate | null;

  @TypeGraphQL.Field(_type => ClinicalEventMinAggregate, {
    nullable: true
  })
  _min!: ClinicalEventMinAggregate | null;

  @TypeGraphQL.Field(_type => ClinicalEventMaxAggregate, {
    nullable: true
  })
  _max!: ClinicalEventMaxAggregate | null;
}
