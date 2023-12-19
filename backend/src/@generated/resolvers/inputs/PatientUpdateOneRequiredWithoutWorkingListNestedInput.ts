import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateOrConnectWithoutWorkingListInput } from "../inputs/PatientCreateOrConnectWithoutWorkingListInput";
import { PatientCreateWithoutWorkingListInput } from "../inputs/PatientCreateWithoutWorkingListInput";
import { PatientUpdateToOneWithWhereWithoutWorkingListInput } from "../inputs/PatientUpdateToOneWithWhereWithoutWorkingListInput";
import { PatientUpsertWithoutWorkingListInput } from "../inputs/PatientUpsertWithoutWorkingListInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientUpdateOneRequiredWithoutWorkingListNestedInput", {})
export class PatientUpdateOneRequiredWithoutWorkingListNestedInput {
  @TypeGraphQL.Field(_type => PatientCreateWithoutWorkingListInput, {
    nullable: true
  })
  create?: PatientCreateWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => PatientCreateOrConnectWithoutWorkingListInput, {
    nullable: true
  })
  connectOrCreate?: PatientCreateOrConnectWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpsertWithoutWorkingListInput, {
    nullable: true
  })
  upsert?: PatientUpsertWithoutWorkingListInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateToOneWithWhereWithoutWorkingListInput, {
    nullable: true
  })
  update?: PatientUpdateToOneWithWhereWithoutWorkingListInput | undefined;
}
