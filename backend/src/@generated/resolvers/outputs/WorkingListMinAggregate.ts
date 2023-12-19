import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModalityExamStatus } from "../../enums/ModalityExamStatus";

@TypeGraphQL.ObjectType("WorkingListMinAggregate", {})
export class WorkingListMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  patientId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modalityId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  clinicalEventId!: string | null;

  @TypeGraphQL.Field(_type => ModalityExamStatus, {
    nullable: true
  })
  modalityExamStatus!: "CREATED" | "INPROGRESS" | "REALIZED" | "REPORT_DONE" | "CLOSED" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  linked!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  linkId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  locked!: boolean | null;
}
