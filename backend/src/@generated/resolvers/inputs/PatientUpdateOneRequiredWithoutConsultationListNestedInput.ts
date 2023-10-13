import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateOrConnectWithoutConsultationListInput } from "../inputs/PatientCreateOrConnectWithoutConsultationListInput";
import { PatientCreateWithoutConsultationListInput } from "../inputs/PatientCreateWithoutConsultationListInput";
import { PatientUpdateToOneWithWhereWithoutConsultationListInput } from "../inputs/PatientUpdateToOneWithWhereWithoutConsultationListInput";
import { PatientUpsertWithoutConsultationListInput } from "../inputs/PatientUpsertWithoutConsultationListInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientUpdateOneRequiredWithoutConsultationListNestedInput", {})
export class PatientUpdateOneRequiredWithoutConsultationListNestedInput {
  @TypeGraphQL.Field(_type => PatientCreateWithoutConsultationListInput, {
    nullable: true
  })
  create?: PatientCreateWithoutConsultationListInput | undefined;

  @TypeGraphQL.Field(_type => PatientCreateOrConnectWithoutConsultationListInput, {
    nullable: true
  })
  connectOrCreate?: PatientCreateOrConnectWithoutConsultationListInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpsertWithoutConsultationListInput, {
    nullable: true
  })
  upsert?: PatientUpsertWithoutConsultationListInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateToOneWithWhereWithoutConsultationListInput, {
    nullable: true
  })
  update?: PatientUpdateToOneWithWhereWithoutConsultationListInput | undefined;
}
