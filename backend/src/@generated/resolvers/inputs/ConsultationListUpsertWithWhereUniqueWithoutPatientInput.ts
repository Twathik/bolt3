import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListCreateWithoutPatientInput } from "../inputs/ConsultationListCreateWithoutPatientInput";
import { ConsultationListUpdateWithoutPatientInput } from "../inputs/ConsultationListUpdateWithoutPatientInput";
import { ConsultationListWhereUniqueInput } from "../inputs/ConsultationListWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationListUpsertWithWhereUniqueWithoutPatientInput", {})
export class ConsultationListUpsertWithWhereUniqueWithoutPatientInput {
  @TypeGraphQL.Field(_type => ConsultationListWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationListWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationListUpdateWithoutPatientInput, {
    nullable: false
  })
  update!: ConsultationListUpdateWithoutPatientInput;

  @TypeGraphQL.Field(_type => ConsultationListCreateWithoutPatientInput, {
    nullable: false
  })
  create!: ConsultationListCreateWithoutPatientInput;
}
