import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkingListCountAggregate } from "../outputs/WorkingListCountAggregate";
import { WorkingListMaxAggregate } from "../outputs/WorkingListMaxAggregate";
import { WorkingListMinAggregate } from "../outputs/WorkingListMinAggregate";
import { ModalityExamStatus } from "../../enums/ModalityExamStatus";

@TypeGraphQL.ObjectType("WorkingListGroupBy", {})
export class WorkingListGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patientId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  modalityId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

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
  linkId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  locked!: boolean;

  @TypeGraphQL.Field(_type => WorkingListCountAggregate, {
    nullable: true
  })
  _count!: WorkingListCountAggregate | null;

  @TypeGraphQL.Field(_type => WorkingListMinAggregate, {
    nullable: true
  })
  _min!: WorkingListMinAggregate | null;

  @TypeGraphQL.Field(_type => WorkingListMaxAggregate, {
    nullable: true
  })
  _max!: WorkingListMaxAggregate | null;
}
