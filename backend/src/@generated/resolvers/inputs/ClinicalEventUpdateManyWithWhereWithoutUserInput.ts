import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventScalarWhereInput } from "../inputs/ClinicalEventScalarWhereInput";
import { ClinicalEventUpdateManyMutationInput } from "../inputs/ClinicalEventUpdateManyMutationInput";

@TypeGraphQL.InputType("ClinicalEventUpdateManyWithWhereWithoutUserInput", {})
export class ClinicalEventUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ClinicalEventScalarWhereInput, {
    nullable: false
  })
  where!: ClinicalEventScalarWhereInput;

  @TypeGraphQL.Field(_type => ClinicalEventUpdateManyMutationInput, {
    nullable: false
  })
  data!: ClinicalEventUpdateManyMutationInput;
}
