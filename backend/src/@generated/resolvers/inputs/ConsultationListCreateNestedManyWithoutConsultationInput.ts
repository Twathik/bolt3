import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListCreateManyConsultationInputEnvelope } from "../inputs/ConsultationListCreateManyConsultationInputEnvelope";
import { ConsultationListCreateOrConnectWithoutConsultationInput } from "../inputs/ConsultationListCreateOrConnectWithoutConsultationInput";
import { ConsultationListCreateWithoutConsultationInput } from "../inputs/ConsultationListCreateWithoutConsultationInput";
import { ConsultationListWhereUniqueInput } from "../inputs/ConsultationListWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationListCreateNestedManyWithoutConsultationInput", {})
export class ConsultationListCreateNestedManyWithoutConsultationInput {
  @TypeGraphQL.Field(_type => [ConsultationListCreateWithoutConsultationInput], {
    nullable: true
  })
  create?: ConsultationListCreateWithoutConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListCreateOrConnectWithoutConsultationInput], {
    nullable: true
  })
  connectOrCreate?: ConsultationListCreateOrConnectWithoutConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => ConsultationListCreateManyConsultationInputEnvelope, {
    nullable: true
  })
  createMany?: ConsultationListCreateManyConsultationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListWhereUniqueInput], {
    nullable: true
  })
  connect?: ConsultationListWhereUniqueInput[] | undefined;
}
