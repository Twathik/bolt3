import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientUpdateWithoutClinicalEventInput } from "../inputs/PatientUpdateWithoutClinicalEventInput";
import { PatientWhereInput } from "../inputs/PatientWhereInput";

@TypeGraphQL.InputType("PatientUpdateToOneWithWhereWithoutClinicalEventInput", {})
export class PatientUpdateToOneWithWhereWithoutClinicalEventInput {
  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateWithoutClinicalEventInput, {
    nullable: false
  })
  data!: PatientUpdateWithoutClinicalEventInput;
}
