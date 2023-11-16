import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionCreateOrConnectWithoutClinicalEventInput } from "../inputs/PrescriptionCreateOrConnectWithoutClinicalEventInput";
import { PrescriptionCreateWithoutClinicalEventInput } from "../inputs/PrescriptionCreateWithoutClinicalEventInput";
import { PrescriptionUpdateToOneWithWhereWithoutClinicalEventInput } from "../inputs/PrescriptionUpdateToOneWithWhereWithoutClinicalEventInput";
import { PrescriptionUpsertWithoutClinicalEventInput } from "../inputs/PrescriptionUpsertWithoutClinicalEventInput";
import { PrescriptionWhereInput } from "../inputs/PrescriptionWhereInput";
import { PrescriptionWhereUniqueInput } from "../inputs/PrescriptionWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionUpdateOneWithoutClinicalEventNestedInput", {})
export class PrescriptionUpdateOneWithoutClinicalEventNestedInput {
  @TypeGraphQL.Field(_type => PrescriptionCreateWithoutClinicalEventInput, {
    nullable: true
  })
  create?: PrescriptionCreateWithoutClinicalEventInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionCreateOrConnectWithoutClinicalEventInput, {
    nullable: true
  })
  connectOrCreate?: PrescriptionCreateOrConnectWithoutClinicalEventInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionUpsertWithoutClinicalEventInput, {
    nullable: true
  })
  upsert?: PrescriptionUpsertWithoutClinicalEventInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionWhereInput, {
    nullable: true
  })
  disconnect?: PrescriptionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionWhereInput, {
    nullable: true
  })
  delete?: PrescriptionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionWhereUniqueInput, {
    nullable: true
  })
  connect?: PrescriptionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionUpdateToOneWithWhereWithoutClinicalEventInput, {
    nullable: true
  })
  update?: PrescriptionUpdateToOneWithWhereWithoutClinicalEventInput | undefined;
}
