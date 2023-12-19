import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateWithoutWorkingListInput } from "../inputs/PatientCreateWithoutWorkingListInput";
import { PatientUpdateWithoutWorkingListInput } from "../inputs/PatientUpdateWithoutWorkingListInput";
import { PatientWhereInput } from "../inputs/PatientWhereInput";

@TypeGraphQL.InputType("PatientUpsertWithoutWorkingListInput", {})
export class PatientUpsertWithoutWorkingListInput {
  @TypeGraphQL.Field(_type => PatientUpdateWithoutWorkingListInput, {
    nullable: false
  })
  update!: PatientUpdateWithoutWorkingListInput;

  @TypeGraphQL.Field(_type => PatientCreateWithoutWorkingListInput, {
    nullable: false
  })
  create!: PatientCreateWithoutWorkingListInput;

  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;
}
