import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientUpdateWithoutWorkingListInput } from "../inputs/PatientUpdateWithoutWorkingListInput";
import { PatientWhereInput } from "../inputs/PatientWhereInput";

@TypeGraphQL.InputType("PatientUpdateToOneWithWhereWithoutWorkingListInput", {})
export class PatientUpdateToOneWithWhereWithoutWorkingListInput {
  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateWithoutWorkingListInput, {
    nullable: false
  })
  data!: PatientUpdateWithoutWorkingListInput;
}
