import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListUpdateWithoutConsultationInput } from "../inputs/ConsultationListUpdateWithoutConsultationInput";
import { ConsultationListWhereUniqueInput } from "../inputs/ConsultationListWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationListUpdateWithWhereUniqueWithoutConsultationInput", {})
export class ConsultationListUpdateWithWhereUniqueWithoutConsultationInput {
  @TypeGraphQL.Field(_type => ConsultationListWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationListWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationListUpdateWithoutConsultationInput, {
    nullable: false
  })
  data!: ConsultationListUpdateWithoutConsultationInput;
}
