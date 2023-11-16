import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateManyUserInput } from "../inputs/ClinicalEventCreateManyUserInput";

@TypeGraphQL.InputType("ClinicalEventCreateManyUserInputEnvelope", {})
export class ClinicalEventCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ClinicalEventCreateManyUserInput], {
    nullable: false
  })
  data!: ClinicalEventCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
