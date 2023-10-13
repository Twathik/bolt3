import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListUpdateWithoutPatientInput } from "../inputs/ConsultationListUpdateWithoutPatientInput";
import { ConsultationListWhereUniqueInput } from "../inputs/ConsultationListWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationListUpdateWithWhereUniqueWithoutPatientInput", {})
export class ConsultationListUpdateWithWhereUniqueWithoutPatientInput {
  @TypeGraphQL.Field(_type => ConsultationListWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationListWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationListUpdateWithoutPatientInput, {
    nullable: false
  })
  data!: ConsultationListUpdateWithoutPatientInput;
}
