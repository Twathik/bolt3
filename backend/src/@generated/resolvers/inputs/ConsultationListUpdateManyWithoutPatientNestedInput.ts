import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListCreateManyPatientInputEnvelope } from "../inputs/ConsultationListCreateManyPatientInputEnvelope";
import { ConsultationListCreateOrConnectWithoutPatientInput } from "../inputs/ConsultationListCreateOrConnectWithoutPatientInput";
import { ConsultationListCreateWithoutPatientInput } from "../inputs/ConsultationListCreateWithoutPatientInput";
import { ConsultationListScalarWhereInput } from "../inputs/ConsultationListScalarWhereInput";
import { ConsultationListUpdateManyWithWhereWithoutPatientInput } from "../inputs/ConsultationListUpdateManyWithWhereWithoutPatientInput";
import { ConsultationListUpdateWithWhereUniqueWithoutPatientInput } from "../inputs/ConsultationListUpdateWithWhereUniqueWithoutPatientInput";
import { ConsultationListUpsertWithWhereUniqueWithoutPatientInput } from "../inputs/ConsultationListUpsertWithWhereUniqueWithoutPatientInput";
import { ConsultationListWhereUniqueInput } from "../inputs/ConsultationListWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationListUpdateManyWithoutPatientNestedInput", {})
export class ConsultationListUpdateManyWithoutPatientNestedInput {
  @TypeGraphQL.Field(_type => [ConsultationListCreateWithoutPatientInput], {
    nullable: true
  })
  create?: ConsultationListCreateWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListCreateOrConnectWithoutPatientInput], {
    nullable: true
  })
  connectOrCreate?: ConsultationListCreateOrConnectWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListUpsertWithWhereUniqueWithoutPatientInput], {
    nullable: true
  })
  upsert?: ConsultationListUpsertWithWhereUniqueWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => ConsultationListCreateManyPatientInputEnvelope, {
    nullable: true
  })
  createMany?: ConsultationListCreateManyPatientInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListWhereUniqueInput], {
    nullable: true
  })
  set?: ConsultationListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ConsultationListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListWhereUniqueInput], {
    nullable: true
  })
  delete?: ConsultationListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListWhereUniqueInput], {
    nullable: true
  })
  connect?: ConsultationListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListUpdateWithWhereUniqueWithoutPatientInput], {
    nullable: true
  })
  update?: ConsultationListUpdateWithWhereUniqueWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListUpdateManyWithWhereWithoutPatientInput], {
    nullable: true
  })
  updateMany?: ConsultationListUpdateManyWithWhereWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ConsultationListScalarWhereInput[] | undefined;
}
