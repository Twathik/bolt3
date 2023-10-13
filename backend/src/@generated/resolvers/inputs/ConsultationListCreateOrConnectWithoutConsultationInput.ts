import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListCreateWithoutConsultationInput } from "../inputs/ConsultationListCreateWithoutConsultationInput";
import { ConsultationListWhereUniqueInput } from "../inputs/ConsultationListWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationListCreateOrConnectWithoutConsultationInput", {})
export class ConsultationListCreateOrConnectWithoutConsultationInput {
  @TypeGraphQL.Field(_type => ConsultationListWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationListWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationListCreateWithoutConsultationInput, {
    nullable: false
  })
  create!: ConsultationListCreateWithoutConsultationInput;
}
