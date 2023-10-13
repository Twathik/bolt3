import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListCreateWithoutConsultationInput } from "../inputs/ConsultationListCreateWithoutConsultationInput";
import { ConsultationListUpdateWithoutConsultationInput } from "../inputs/ConsultationListUpdateWithoutConsultationInput";
import { ConsultationListWhereUniqueInput } from "../inputs/ConsultationListWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationListUpsertWithWhereUniqueWithoutConsultationInput", {})
export class ConsultationListUpsertWithWhereUniqueWithoutConsultationInput {
  @TypeGraphQL.Field(_type => ConsultationListWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationListWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationListUpdateWithoutConsultationInput, {
    nullable: false
  })
  update!: ConsultationListUpdateWithoutConsultationInput;

  @TypeGraphQL.Field(_type => ConsultationListCreateWithoutConsultationInput, {
    nullable: false
  })
  create!: ConsultationListCreateWithoutConsultationInput;
}
