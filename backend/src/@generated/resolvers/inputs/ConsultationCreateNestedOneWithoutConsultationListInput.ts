import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationCreateOrConnectWithoutConsultationListInput } from "../inputs/ConsultationCreateOrConnectWithoutConsultationListInput";
import { ConsultationCreateWithoutConsultationListInput } from "../inputs/ConsultationCreateWithoutConsultationListInput";
import { ConsultationWhereUniqueInput } from "../inputs/ConsultationWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationCreateNestedOneWithoutConsultationListInput", {})
export class ConsultationCreateNestedOneWithoutConsultationListInput {
  @TypeGraphQL.Field(_type => ConsultationCreateWithoutConsultationListInput, {
    nullable: true
  })
  create?: ConsultationCreateWithoutConsultationListInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationCreateOrConnectWithoutConsultationListInput, {
    nullable: true
  })
  connectOrCreate?: ConsultationCreateOrConnectWithoutConsultationListInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationWhereUniqueInput, {
    nullable: true
  })
  connect?: ConsultationWhereUniqueInput | undefined;
}
