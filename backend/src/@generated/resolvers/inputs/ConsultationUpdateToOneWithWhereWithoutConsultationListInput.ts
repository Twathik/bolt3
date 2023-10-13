import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationUpdateWithoutConsultationListInput } from "../inputs/ConsultationUpdateWithoutConsultationListInput";
import { ConsultationWhereInput } from "../inputs/ConsultationWhereInput";

@TypeGraphQL.InputType("ConsultationUpdateToOneWithWhereWithoutConsultationListInput", {})
export class ConsultationUpdateToOneWithWhereWithoutConsultationListInput {
  @TypeGraphQL.Field(_type => ConsultationWhereInput, {
    nullable: true
  })
  where?: ConsultationWhereInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationUpdateWithoutConsultationListInput, {
    nullable: false
  })
  data!: ConsultationUpdateWithoutConsultationListInput;
}
