import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateWithoutClinicalEventInput } from "../inputs/PatientCreateWithoutClinicalEventInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientCreateOrConnectWithoutClinicalEventInput", {})
export class PatientCreateOrConnectWithoutClinicalEventInput {
  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: false
  })
  where!: PatientWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientCreateWithoutClinicalEventInput, {
    nullable: false
  })
  create!: PatientCreateWithoutClinicalEventInput;
}
