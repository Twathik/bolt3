import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListCreateManyPatientInputEnvelope } from "../inputs/ConsultationListCreateManyPatientInputEnvelope";
import { ConsultationListCreateOrConnectWithoutPatientInput } from "../inputs/ConsultationListCreateOrConnectWithoutPatientInput";
import { ConsultationListCreateWithoutPatientInput } from "../inputs/ConsultationListCreateWithoutPatientInput";
import { ConsultationListWhereUniqueInput } from "../inputs/ConsultationListWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationListCreateNestedManyWithoutPatientInput", {})
export class ConsultationListCreateNestedManyWithoutPatientInput {
  @TypeGraphQL.Field(_type => [ConsultationListCreateWithoutPatientInput], {
    nullable: true
  })
  create?: ConsultationListCreateWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListCreateOrConnectWithoutPatientInput], {
    nullable: true
  })
  connectOrCreate?: ConsultationListCreateOrConnectWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => ConsultationListCreateManyPatientInputEnvelope, {
    nullable: true
  })
  createMany?: ConsultationListCreateManyPatientInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListWhereUniqueInput], {
    nullable: true
  })
  connect?: ConsultationListWhereUniqueInput[] | undefined;
}
