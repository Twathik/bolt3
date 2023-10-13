import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationCreateWithoutConsultationListInput } from "../inputs/ConsultationCreateWithoutConsultationListInput";
import { ConsultationWhereUniqueInput } from "../inputs/ConsultationWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationCreateOrConnectWithoutConsultationListInput", {})
export class ConsultationCreateOrConnectWithoutConsultationListInput {
  @TypeGraphQL.Field(_type => ConsultationWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationCreateWithoutConsultationListInput, {
    nullable: false
  })
  create!: ConsultationCreateWithoutConsultationListInput;
}
