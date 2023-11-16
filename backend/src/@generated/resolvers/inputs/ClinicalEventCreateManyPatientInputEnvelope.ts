import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClinicalEventCreateManyPatientInput } from "../inputs/ClinicalEventCreateManyPatientInput";

@TypeGraphQL.InputType("ClinicalEventCreateManyPatientInputEnvelope", {})
export class ClinicalEventCreateManyPatientInputEnvelope {
  @TypeGraphQL.Field(_type => [ClinicalEventCreateManyPatientInput], {
    nullable: false
  })
  data!: ClinicalEventCreateManyPatientInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
