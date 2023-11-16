import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateOrConnectWithoutClinicalEventInput } from "../inputs/PatientCreateOrConnectWithoutClinicalEventInput";
import { PatientCreateWithoutClinicalEventInput } from "../inputs/PatientCreateWithoutClinicalEventInput";
import { PatientUpdateToOneWithWhereWithoutClinicalEventInput } from "../inputs/PatientUpdateToOneWithWhereWithoutClinicalEventInput";
import { PatientUpsertWithoutClinicalEventInput } from "../inputs/PatientUpsertWithoutClinicalEventInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientUpdateOneRequiredWithoutClinicalEventNestedInput", {})
export class PatientUpdateOneRequiredWithoutClinicalEventNestedInput {
  @TypeGraphQL.Field(_type => PatientCreateWithoutClinicalEventInput, {
    nullable: true
  })
  create?: PatientCreateWithoutClinicalEventInput | undefined;

  @TypeGraphQL.Field(_type => PatientCreateOrConnectWithoutClinicalEventInput, {
    nullable: true
  })
  connectOrCreate?: PatientCreateOrConnectWithoutClinicalEventInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpsertWithoutClinicalEventInput, {
    nullable: true
  })
  upsert?: PatientUpsertWithoutClinicalEventInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateToOneWithWhereWithoutClinicalEventInput, {
    nullable: true
  })
  update?: PatientUpdateToOneWithWhereWithoutClinicalEventInput | undefined;
}
