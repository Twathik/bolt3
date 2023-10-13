import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationCreateOrConnectWithoutConsultationListInput } from "../inputs/ConsultationCreateOrConnectWithoutConsultationListInput";
import { ConsultationCreateWithoutConsultationListInput } from "../inputs/ConsultationCreateWithoutConsultationListInput";
import { ConsultationUpdateToOneWithWhereWithoutConsultationListInput } from "../inputs/ConsultationUpdateToOneWithWhereWithoutConsultationListInput";
import { ConsultationUpsertWithoutConsultationListInput } from "../inputs/ConsultationUpsertWithoutConsultationListInput";
import { ConsultationWhereUniqueInput } from "../inputs/ConsultationWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationUpdateOneRequiredWithoutConsultationListNestedInput", {})
export class ConsultationUpdateOneRequiredWithoutConsultationListNestedInput {
  @TypeGraphQL.Field(_type => ConsultationCreateWithoutConsultationListInput, {
    nullable: true
  })
  create?: ConsultationCreateWithoutConsultationListInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationCreateOrConnectWithoutConsultationListInput, {
    nullable: true
  })
  connectOrCreate?: ConsultationCreateOrConnectWithoutConsultationListInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationUpsertWithoutConsultationListInput, {
    nullable: true
  })
  upsert?: ConsultationUpsertWithoutConsultationListInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationWhereUniqueInput, {
    nullable: true
  })
  connect?: ConsultationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationUpdateToOneWithWhereWithoutConsultationListInput, {
    nullable: true
  })
  update?: ConsultationUpdateToOneWithWhereWithoutConsultationListInput | undefined;
}
