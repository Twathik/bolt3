import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ConsultationListPatientIdConsultationIdCompoundUniqueInput", {})
export class ConsultationListPatientIdConsultationIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patientId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  consultationId!: string;
}
