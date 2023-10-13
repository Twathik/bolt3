import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationCreateWithoutConsultationListInput } from "../inputs/ConsultationCreateWithoutConsultationListInput";
import { ConsultationUpdateWithoutConsultationListInput } from "../inputs/ConsultationUpdateWithoutConsultationListInput";
import { ConsultationWhereInput } from "../inputs/ConsultationWhereInput";

@TypeGraphQL.InputType("ConsultationUpsertWithoutConsultationListInput", {})
export class ConsultationUpsertWithoutConsultationListInput {
  @TypeGraphQL.Field(_type => ConsultationUpdateWithoutConsultationListInput, {
    nullable: false
  })
  update!: ConsultationUpdateWithoutConsultationListInput;

  @TypeGraphQL.Field(_type => ConsultationCreateWithoutConsultationListInput, {
    nullable: false
  })
  create!: ConsultationCreateWithoutConsultationListInput;

  @TypeGraphQL.Field(_type => ConsultationWhereInput, {
    nullable: true
  })
  where?: ConsultationWhereInput | undefined;
}
