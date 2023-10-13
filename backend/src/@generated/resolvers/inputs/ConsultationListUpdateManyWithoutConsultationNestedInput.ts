import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationListCreateManyConsultationInputEnvelope } from "../inputs/ConsultationListCreateManyConsultationInputEnvelope";
import { ConsultationListCreateOrConnectWithoutConsultationInput } from "../inputs/ConsultationListCreateOrConnectWithoutConsultationInput";
import { ConsultationListCreateWithoutConsultationInput } from "../inputs/ConsultationListCreateWithoutConsultationInput";
import { ConsultationListScalarWhereInput } from "../inputs/ConsultationListScalarWhereInput";
import { ConsultationListUpdateManyWithWhereWithoutConsultationInput } from "../inputs/ConsultationListUpdateManyWithWhereWithoutConsultationInput";
import { ConsultationListUpdateWithWhereUniqueWithoutConsultationInput } from "../inputs/ConsultationListUpdateWithWhereUniqueWithoutConsultationInput";
import { ConsultationListUpsertWithWhereUniqueWithoutConsultationInput } from "../inputs/ConsultationListUpsertWithWhereUniqueWithoutConsultationInput";
import { ConsultationListWhereUniqueInput } from "../inputs/ConsultationListWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationListUpdateManyWithoutConsultationNestedInput", {})
export class ConsultationListUpdateManyWithoutConsultationNestedInput {
  @TypeGraphQL.Field(_type => [ConsultationListCreateWithoutConsultationInput], {
    nullable: true
  })
  create?: ConsultationListCreateWithoutConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListCreateOrConnectWithoutConsultationInput], {
    nullable: true
  })
  connectOrCreate?: ConsultationListCreateOrConnectWithoutConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListUpsertWithWhereUniqueWithoutConsultationInput], {
    nullable: true
  })
  upsert?: ConsultationListUpsertWithWhereUniqueWithoutConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => ConsultationListCreateManyConsultationInputEnvelope, {
    nullable: true
  })
  createMany?: ConsultationListCreateManyConsultationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ConsultationListUpdateWithWhereUniqueWithoutConsultationInput], {
    nullable: true
  })
  update?: ConsultationListUpdateWithWhereUniqueWithoutConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListUpdateManyWithWhereWithoutConsultationInput], {
    nullable: true
  })
  updateMany?: ConsultationListUpdateManyWithWhereWithoutConsultationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationListScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ConsultationListScalarWhereInput[] | undefined;
}
