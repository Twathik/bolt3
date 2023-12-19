import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateNestedOneWithoutWorkingListInput } from "../inputs/ClinicalEventCreateNestedOneWithoutWorkingListInput";
import { PatientCreateNestedOneWithoutWorkingListInput } from "../inputs/PatientCreateNestedOneWithoutWorkingListInput";
import { UserCreateNestedOneWithoutWorkingListInput } from "../inputs/UserCreateNestedOneWithoutWorkingListInput";
import { ModalityExamStatus } from "../../enums/ModalityExamStatus";

@TypeGraphQL.InputType("WorkingListCreateWithoutModalityInput", {})
export class WorkingListCreateWithoutModalityInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => ModalityExamStatus, {
    nullable: true
  })
  modalityExamStatus?: "CREATED" | "INPROGRESS" | "REALIZED" | "REPORT_DONE" | "CLOSED" | undefined;

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
  linked?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  linkId?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  locked?: boolean | undefined;

  @TypeGraphQL.Field(_type => PatientCreateNestedOneWithoutWorkingListInput, {
    nullable: false
  })
  patient!: PatientCreateNestedOneWithoutWorkingListInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutWorkingListInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutWorkingListInput;

  @TypeGraphQL.Field(_type => ClinicalEventCreateNestedOneWithoutWorkingListInput, {
    nullable: false
  })
  clinicalEvent!: ClinicalEventCreateNestedOneWithoutWorkingListInput;
}