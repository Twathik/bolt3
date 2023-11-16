import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateWithoutClinicalEventInput } from "../inputs/PatientCreateWithoutClinicalEventInput";
import { PatientUpdateWithoutClinicalEventInput } from "../inputs/PatientUpdateWithoutClinicalEventInput";
import { PatientWhereInput } from "../inputs/PatientWhereInput";

@TypeGraphQL.InputType("PatientUpsertWithoutClinicalEventInput", {})
export class PatientUpsertWithoutClinicalEventInput {
  @TypeGraphQL.Field(_type => PatientUpdateWithoutClinicalEventInput, {
    nullable: false
  })
  update!: PatientUpdateWithoutClinicalEventInput;

  @TypeGraphQL.Field(_type => PatientCreateWithoutClinicalEventInput, {
    nullable: false
  })
  create!: PatientCreateWithoutClinicalEventInput;

  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;
}
