import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientUpdateWithoutConsultationListInput } from "../inputs/PatientUpdateWithoutConsultationListInput";
import { PatientWhereInput } from "../inputs/PatientWhereInput";

@TypeGraphQL.InputType("PatientUpdateToOneWithWhereWithoutConsultationListInput", {})
export class PatientUpdateToOneWithWhereWithoutConsultationListInput {
  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateWithoutConsultationListInput, {
    nullable: false
  })
  data!: PatientUpdateWithoutConsultationListInput;
}
