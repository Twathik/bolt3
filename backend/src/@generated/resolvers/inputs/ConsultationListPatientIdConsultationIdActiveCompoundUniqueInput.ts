import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ConsultationListPatientIdConsultationIdActiveCompoundUniqueInput", {})
export class ConsultationListPatientIdConsultationIdActiveCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patientId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  consultationId!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;
}
