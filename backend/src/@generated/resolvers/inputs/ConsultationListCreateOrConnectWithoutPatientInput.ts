import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListCreateWithoutPatientInput } from "../inputs/ConsultationListCreateWithoutPatientInput";
import { ConsultationListWhereUniqueInput } from "../inputs/ConsultationListWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationListCreateOrConnectWithoutPatientInput", {})
export class ConsultationListCreateOrConnectWithoutPatientInput {
  @TypeGraphQL.Field(_type => ConsultationListWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationListWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationListCreateWithoutPatientInput, {
    nullable: false
  })
  create!: ConsultationListCreateWithoutPatientInput;
}
